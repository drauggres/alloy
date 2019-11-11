var path = require('path'),
	walkSync = require('walk-sync'),
	CU = require('../compilerUtils'),
	U = require('../../../utils'),
	CONST = require('../../../common/constants'),
	_ = require('lodash'),
	logger = require('../../../logger');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var code = '';
	var nodeName = node.nodeName;
	var isSingleton = node.getAttribute('instance') !== 'true';
	var id = node.getAttribute('id');
	var src = node.getAttribute('src');
	var backboneVar;
	var manifest = CU.currentManifest;
	var root = manifest ? CONST.WIDGET_OBJECT : 'Alloy';
	var tsOutput = state.outputFormat === 'TS';
	var thisController = '$';
	var ext = CONST.FILE_EXT.JS_MODEL;
	var propertyDeclaration = '';
	var importCode = '';
	if (tsOutput) {
		thisController = 'this';
		ext = CONST.FILE_EXT.TS_MODEL;
		importCode += `import { Collection as ${src}Collection, Model as ${src}Model } from '<%= models %>/${src}';\n`;
	}

	// Make sure the parent is <Alloy>
	if (!node.parentNode || node.parentNode.nodeName !== 'Alloy') {
		U.dieWithNode(node, 'All <' + nodeName + '> elements must be a direct child of <Alloy>');
	}

	// only perform compile time checks on nodes in non-widget markup
	if (!manifest) {
		// Make sure there's models to be used as the "src" of the Backbone class
		var modelsPath = path.join(CU.getCompilerConfig().dir.home, CONST.DIR.MODEL);
		var validModels;
		if (!path.existsSync(modelsPath) || !(validModels = walkSync(modelsPath)).length) {
			U.dieWithNode(node, [
				'You must have a valid model in your app/' + CONST.DIR.MODEL + ' folder to create a <' + nodeName + '>',
				'Once you have a valid model, assign it like this for a singleton:',
				'  <' + nodeName + ' src="yourModelName"/>',
				'Or like this for an instance:',
				'  <' + nodeName + ' src="yourModelName" instance="true" id="someId"/>'
			]);
		}

		// Make sure we have a valid model src
		var validModelsPrint = '[' + _.map(validModels, function(s) { return s.replace(new RegExp('\\.' + ext + '$'), ''); }).join(',') + ']';
		if (!src) {
			U.dieWithNode(node, [
				'All ' + U.lcfirst(nodeName) + 's must have a "src" attribute which identifies its base model',
				'"src" should be the name of a model in your app/' + CONST.DIR.MODEL + ' folder',
				'Valid models: ' + validModelsPrint
			]);
		} else {
			var modelPath = path.join(modelsPath, src + '.' + ext);
			if (!path.existsSync(modelPath)) {
				U.dieWithNode(node, [
					'"src" attribute\'s model "' + src + '" does not exist in app/' + CONST.DIR.MODEL,
					'Valid models: ' + validModelsPrint
				]);
			}
		}
	}
	var createCall = root + '.create' + nodeName + '(\'' + src + '\')';

	// create code based on whether the collection is a singleton or instance
	if (isSingleton) {
		if (id) {
			logger.warn([
				'Warning with <' + nodeName + '> at line ' + node.lineNumber,
				'id="' + id + '" will be ignored, as only ' + nodeName + ' instances can have ids, not singletons',
				'To create an instance of the ' + nodeName + ', add instance="true"',
				'This instance will be accessible in your controller as $.' + id,
				'Example: ',
				'  <' + nodeName + ' src="' + src + '" id="' + id + '" instance="true"/>'
			]);
		}

		code += root + '.' + nodeName + 's.instance(\'' + src + '\');';
		backboneVar = root + '.' + nodeName + 's.' + src;

		// code += backboneVar + ' || (' + backboneVar + ' = ' + createCall + ');';
	} else {
		id = id || args.id;
		backboneVar = thisController + '.' + id;
		if (tsOutput) {
			propertyDeclaration = '    // TODO: replace with normal instantiation:\n' +
					`    // public ${args.id}: ${src}${nodeName} = new ${src}${nodeName}();\n` +
					`    public ${args.id}: ${src}${nodeName} = ${createCall} as ${src}${nodeName};\n`;
		} else {
			code += backboneVar + ' = ' + createCall + ';';
		}
	}

	return {
		importCode: importCode,
		propertyDeclaration: propertyDeclaration,
		code: '',
		modelCode: code, // modelCode will add this before the UI code
		args: {
			symbol: backboneVar
		}
	};
}
