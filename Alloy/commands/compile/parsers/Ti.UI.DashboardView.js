var _ = require('lodash'),
	styler = require('../styler'),
	U = require('../../../utils'),
	CU = require('../compilerUtils'),
	CONST = require('../../../common/constants');

var VALID = [
	'Ti.UI.DashboardItem'
];

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var children = U.XML.getElementsFromNodes(node.childNodes),
		arrayName = CU.generateUniqueId(),
		isCollectionBound = args[CONST.BIND_COLLECTION] ? true : false,
		code = 'var ' + arrayName + '=[];\n';
	var tsOutput = state.outputFormat === 'TS';

	// iterate through all children
	if (!isCollectionBound) {
		_.each(U.XML.getElementsFromNodes(node.childNodes), function(child, index) {
			if (CU.validateNodeName(child, VALID)) {
				// generate code for the DashboardItem
				code += CU.generateNodeExtended(child, state, {
					parent: {},
					post: function(node, state, args) {
						return arrayName + '.push(' + state.parent.symbol + ');\n';
					}
				});

				// When we are done processing the DashboardItem, remove it from the
				// markup. That way we can just pass back the current DashboardView state as
				// the returned state and it can continue to process any other children
				// without special handling
				node.removeChild(child);
			}
		});
	}

	// Create the initial DashboardView code
	if (isCollectionBound) {
		_.each(CONST.BIND_PROPERTIES, function(p) {
			node.removeAttribute(p);
		});
	}
	state.extraStyle = styler.createVariableStyle('data', arrayName);
	var dashState = require('./default').parse(node, state);
	code += dashState.code;

	if (isCollectionBound) {
		var localModel = CU.generateUniqueId();
		var itemCode = '';
		var localArray = 'data';

		_.each(U.XML.getElementsFromNodes(node.childNodes), function(child) {
			// generate the repeated element
			itemCode += CU.generateNode(child, {
				outputFormat: state.outputFormat,
				parent: {},
				local: true,
				model: localModel,
				post: function(node, state, args) {
					return localArray + '.push(' + state.parent.symbol + ');\n';
				}
			});

			// remove it from the XML
			node.removeChild(child);
		});

		if (state.parentFormFactor || node.hasAttribute('formFactor')) {
			// if this node or a parent has set the formFactor attribute
			// we need to pass it to the data binding generator
			args.parentFormFactor = (state.parentFormFactor || node.getAttribute('formFactor'));
		}
		var pre = tsOutput ? 'const ' + localArray + ' = [];' : 'var ' + localArray + '=[];';
		CU.dataFunctionsCode += _.template(CU.generateCollectionBindingTemplate(args, state))({
			localModel: localModel,
			pre: pre,
			items: itemCode,
			post: dashState.parent.symbol + '.data=' + localArray + ';'
		});
	}

	// Update the parsing state
	return _.extend(dashState, {code:code});
}
