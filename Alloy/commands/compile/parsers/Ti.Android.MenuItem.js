var CU = require('../compilerUtils'),
	U = require('../../../utils'),
	CONST = require('../../../common/constants'),
	styler = require('../styler'),
	_ = require('lodash');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var code = '',
		actionView,
		createArgs = args.createArgs || {},
		id,
		newCode;

	_.each(U.XML.getElementsFromNodes(node.childNodes), function(child) {
		// process children, of which only ActionView is supported
		var childArgs = CU.getParserArgs(child, state);
		var parts = CU.getNodeFullname(child).split('.');
		if (parts[0] === '_ProxyProperty') {
			actionView = require('./_ProxyProperty.' + parts[1]).parse(node, state);
		}
	});
	var anyTypeString = '';
	var thisController = '$';
	if (state.outputFormat === 'TS') {
		thisController = 'this';
		anyTypeString = ': any';
	}
	if (actionView) {
		// add the code to the parent
		code += actionView.code;

		// expose UI id
		id = actionView.parent && actionView.parent.symbol;
		newCode = id ? (thisController + '.' + id.split('.').pop() + '=' + id + ';') : '';
		code += newCode;
	}

	var styleObjectCode = styler.generateStyleParams(
		state.styles,
		args.classes,
		args.id,
		CU.getNodeFullname(node),
		_.defaults(state.extraStyle || {}, createArgs)
	);

	var propertyDeclaration;
	if (!state.local) {
		propertyDeclaration = {
			name: args.id,
			conditional: true,
			type: args.fullname
		};
	}
	return {
		importCode: `import * as _ from 'underscore';\n`,
		propertyDeclaration: propertyDeclaration,
		parent: {},
		styles: state.styles,
		code: code + U.evaluateTemplate('Ti.Android.MenuItem.js', {
			item: args.symbol,
			anyString: anyTypeString,
			parent: state.parent.symbol || CONST.PARENT_SYMBOL_VAR,
			style: CU.generateUniqueId(),
			styleCode: styleObjectCode,
			argsId: args.id,
			actionView: (actionView && actionView.parent) ? actionView.parent.symbol : false
		})
	};
}
