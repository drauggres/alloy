const styler = require('../styler');
const CU = require('../compilerUtils');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	const linkHandler = node.getAttribute('onlink');
	if (linkHandler) {
		const value = state.outputFormat === 'TS' ? 'this.' + linkHandler + '.bind(this)' : linkHandler;
		node.setAttribute('onlink', `${styler.STYLE_EXPR_PREFIX}${value}`);
		var method = `abstract ${linkHandler}(e: OnLinkURLResponse): void;\n`;
		var index = CU.abstractMethods.indexOf(`abstract ${linkHandler}(`);
		if (index === -1) {
			CU.abstractMethods += method;
		} else if (CU.abstractMethods.indexOf(method) === -1) {
			var before = CU.abstractMethods.substr(0, index);
			var after = CU.abstractMethods.substr(index, CU.abstractMethods.length);
			CU.abstractMethods = before + method + after;
		}
	}
	return require('./default').parse(node, state, args);
}
