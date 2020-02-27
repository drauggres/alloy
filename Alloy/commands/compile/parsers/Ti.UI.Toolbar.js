var _ = require('lodash'),
	tiapp = require('../../../tiapp'),
	U = require('../../../utils'),
	CONST = require('../../../common/constants'),
	CU = require('../compilerUtils');

exports.parse = function(node, state) {
	var platform = CU.getCompilerConfig().alloyConfig.platform;
	if (tiapp.version.lt(tiapp.getSdkVersion(), '6.2.0')) {
		if (platform !== 'ios') {
			U.die('Ti.UI.Toolbar requires Titanium 6.2.0+');
		}
		node.setAttribute('ns', 'Ti.UI.iOS');
	}

	var eventObject = 'e',
		code = '',
		xmlStyles = {};
	// Properties inherited from ActionBar when Toolbar is passed to the Activity
	var inheritedProperties = [CONST.BACKGROUND_IMAGE, CONST.DISPLAY_HOME_AS_UP, CONST.HOME_BUTTON_ENABLED, CONST.NAVIGATION_MODE, CONST.ON_HOME_ICON_ITEM_SELECTED];

	state = _.extend(state, {
		itemContainerDefinition: {
			children: [
				{ name: 'Alloy.Abstract.Items', property: 'items' }
			]
		}
	});

	// Only if the Ti.UI.Toolbar is passed as an ActionBar to the activity
	var isActionBar = state.parent && state.parent.node && state.parent.node.getAttribute('customToolbar') === node.getAttribute('id');
	var tempRes;
	if (isActionBar) {
		var removed = {};
		// Create an object holding all the actionBar-related properties set in the XML
		_.each(inheritedProperties, function(prop) {
			if (node.hasAttribute(prop)) {
				xmlStyles[prop] = node.getAttribute(prop);
				node.removeAttribute(prop);
			}
		});
		inheritedProperties.forEach(prop => {
			if (node.hasAttribute(prop)) {
				removed[prop] = node.getAttribute(prop);
				node.removeAttribute(prop);
			}
		});
		tempRes = require('./Alloy.Abstract._ItemContainer').parse(node, state);
		inheritedProperties.forEach(prop => {
			if (typeof xmlStyles[prop] !== 'undefined') {
				node.setAttribute(prop, xmlStyles[prop]);
			}
		});
	} else {
		tempRes = require('./Alloy.Abstract._ItemContainer').parse(node, state);
	}

	if (isActionBar) {

		var activityTssStyles = _.filter(state.styles, function(elem) {
			// Generates a sorted array of styles filtered to include only elements
			// associated with the activity (by ID, class, or API name)
			return elem.key === node.getAttribute('id') || elem.key === node.getAttribute('class') || elem.key === node.nodeName;
		});
		// To respect proper style hierarchy, take the last element in the array (which will be the highest priority)
		var activityTssKey = _.isArray(activityTssStyles) ? activityTssStyles.length - 1 : 0;
		if (activityTssStyles[activityTssKey] && activityTssStyles[activityTssKey].style) {
			_.defaults(xmlStyles, activityTssStyles[activityTssKey].style);
		}

		var viewsHolder = '$.__views.';
		if (state.outputFormat === 'TS') {
			viewsHolder = 'this.';
			if (xmlStyles.onHomeIconItemSelected) {
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
		}

		// Generate the template code
		if ((_.filter(_.values(xmlStyles), function(val) { return val !== undefined; })).length > 0) {
			code += state.parent.symbol + '.activity.setSupportActionBar(' + viewsHolder + node.getAttribute('id') + ');';
			if (xmlStyles.backgroundImage)  { code += state.parent.symbol + '.activity.actionBar.backgroundImage = "' + xmlStyles.backgroundImage + '";'; }
			if (xmlStyles.displayHomeAsUp)  { code += state.parent.symbol + '.activity.actionBar.displayHomeAsUp = ' + xmlStyles.displayHomeAsUp + ';'; }
			if (xmlStyles.homeButtonEnabled)  { code += state.parent.symbol + '.activity.actionBar.homeButtonEnabled = ' + xmlStyles.homeButtonEnabled + ';'; }
			if (xmlStyles.navigationMode)  { code += state.parent.symbol + '.activity.actionBar.navigationMode = ' + xmlStyles.navigationMode + ';'; }
			if (xmlStyles.onHomeIconItemSelected)  { code += state.parent.symbol + '.activity.actionBar.onHomeIconItemSelected = ' + xmlStyles.onHomeIconItemSelected + ';'; }
		}

		tempRes.code += U.evaluateTemplate('Ti.Android.ActionBar.js', {
			returnType: state.outputFormat === 'TS' ? ': void' : '',
			parent: state.parent.symbol || CU.getParentSymbol(state),
			code: code,
			eventObject: eventObject,
			openFunc: CU.generateUniqueId()
		});
	}
	return {
		parent: {},
		styles: tempRes.styles,
		code: tempRes.code
	};
};
