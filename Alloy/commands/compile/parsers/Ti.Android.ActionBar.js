var _ = require('lodash'),
	U = require('../../../utils'),
	CU = require('../compilerUtils'),
	CONST = require('../../../common/constants'),
	logger = require('../../../logger');

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	var eventObject = 'e',
		code = '',
		xmlStyles = {},
		actionBarProperties = ['title', 'subtitle', CONST.BACKGROUND_IMAGE, CONST.DISPLAY_HOME_AS_UP, CONST.HOME_BUTTON_ENABLED, 'icon', 'logo', CONST.NAVIGATION_MODE, CONST.ON_HOME_ICON_ITEM_SELECTED];

	// if this isn't android, generate no code, but show a warning
	var config = CU.getCompilerConfig(),
		platform = config && config.alloyConfig ? config.alloyConfig.platform : undefined;
	if (platform !== 'android') {
		if (node.getAttribute('platform') !== 'android') {
			logger.warn([
				'<Activity> is only available in Android',
				'To get rid of this warning, add platform="android" to your <Activity> element'
			]);
		}
		return {
			parent: {},
			styles: state.styles,
			code: ''
		};
	}

	var activityTssStyles = _.filter(state.styles, function(elem) {
		// generates a sorted array of styles filtered to include only elements
		// associated with the activity (by ID, class, or API name)
		return elem.key === node.getAttribute('id') || elem.key === node.getAttribute('class') || elem.key === node.nodeName;
	});
	// create an object holding all the actionBar-related properties set in the XML
	_.each(actionBarProperties, function(prop) {
		if (node.hasAttribute(prop)) {
			xmlStyles[prop] = node.getAttribute(prop);
		}
	});
	// to respect proper style hierarchy, take the last element in the array (which will be the highest priority)
	var activityTssKey = _.isArray(activityTssStyles) ? activityTssStyles.length - 1 : 0;
	if (activityTssStyles[activityTssKey] && activityTssStyles[activityTssKey].style) {
		_.defaults(xmlStyles, activityTssStyles[activityTssKey].style);
	}
	if (state.outputFormat === 'TS' && xmlStyles.onHomeIconItemSelected) {
		var value = xmlStyles.onHomeIconItemSelected;
		var match = value.match(CU.BINDING_REGEX);
		if (match) {
			value = match[4] || match[3] || match[2];
		}
		xmlStyles.onHomeIconItemSelected = 'this.' + value + '.bind(this)';
		var method = `abstract ${value}(...args: any[]): void;\n`;
		var index = CU.abstractMethods.indexOf(`abstract ${value}(`);
		if (index === -1) {
			CU.abstractMethods += method;
		} else if (CU.abstractMethods.indexOf(method) === -1) {
			var before = CU.abstractMethods.substr(0, index);
			var after = CU.abstractMethods.substr(index, CU.abstractMethods.length);
			CU.abstractMethods = before + method + after;
		}
	}

	// generate the template code
	if ((_.filter(_.values(xmlStyles), function(val) { return val !== undefined; })).length > 0) {
		if (xmlStyles.title)  { code += state.parent.symbol + '.activity.actionBar.title = "' + xmlStyles.title + '";'; }
		if (xmlStyles.subtitle)  { code += state.parent.symbol + '.activity.actionBar.subtitle = "' + xmlStyles.subtitle + '";'; }
		if (xmlStyles.backgroundImage)  { code += state.parent.symbol + '.activity.actionBar.backgroundImage = "' + xmlStyles.backgroundImage + '";'; }
		if (xmlStyles.displayHomeAsUp)  { code += state.parent.symbol + '.activity.actionBar.displayHomeAsUp = ' + xmlStyles.displayHomeAsUp + ';'; }
		if (xmlStyles.homeButtonEnabled)  { code += state.parent.symbol + '.activity.actionBar.homeButtonEnabled = ' + xmlStyles.homeButtonEnabled + ';'; }
		if (xmlStyles.icon)  { code += state.parent.symbol + '.activity.actionBar.icon = "' + xmlStyles.icon + '";'; }
		if (xmlStyles.logo)  { code += state.parent.symbol + '.activity.actionBar.logo = "' + xmlStyles.logo + '";'; }
		if (xmlStyles.navigationMode)  { code += state.parent.symbol + '.activity.actionBar.navigationMode = ' + xmlStyles.navigationMode + ';'; }
		if (xmlStyles.onHomeIconItemSelected)  { code += state.parent.symbol + '.activity.actionBar.onHomeIconItemSelected = ' + xmlStyles.onHomeIconItemSelected + ';'; }
	}

	var propertyDeclaration;
	if (!state.local) {
		propertyDeclaration = {
			pre: '// ',
			name: args.id,
			type: args.fullname
		};
	}
	// Update the parsing state, and process the template
	return {
		propertyDeclaration: propertyDeclaration,
		parent: {},
		styles: state.styles,
		code: U.evaluateTemplate('Ti.Android.ActionBar.js', {
			returnType: state.outputFormat === 'TS' ? ': void' : '',
			parent: state.parent.symbol || CU.getParentSymbol(state),
			code: code,
			eventObject: eventObject,
			openFunc: CU.generateUniqueId()
		})
	};
}
