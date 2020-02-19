var _ = require('lodash'),
	logger = require('../../../logger'),
	styler = require('../styler'),
	CU = require('../compilerUtils'),
	U = require('../../../utils'),
	tiapp = require('../../../tiapp'),
	iOSProxy;

var MIN_VERSION = '5.4.0';

var systemButtons = [
	'ACTION', 'ACTIVITY', 'ADD', 'BOOKMARKS', 'CAMERA', 'CANCEL', 'COMPOSE', 'CONTACT_ADD',
	'DISCLOSURE', 'DONE', 'EDIT', 'FAST_FORWARD', 'FIXED_SPACE', 'FLEXIBLE_SPACE', 'INFO_DARK',
	'INFO_LIGHT', 'ORGANIZE', 'PAUSE', 'PLAY', 'REFRESH', 'REPLY', 'REWIND', 'SAVE', 'SPINNER',
	'STOP', 'TRASH'
];

exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	// Get button title from node text, if present
	var nodeText = U.XML.getNodeText(node);
	if (nodeText) {
		state.extraStyle = styler.createVariableStyle('title', U.possibleMultilineString(U.trim(nodeText.replace(/'/g, "\\'"))));
	}

	if (tiapp.version.gte(tiapp.getSdkVersion(), MIN_VERSION)) {
		iOSProxy = 'iOS';
	} else {
		iOSProxy = 'iPhone';
	}

	var systemButton = node.getAttribute('systemButton');
	var RE = /(?:Ti|Titanium)\.UI\.(iPhone|iOS)\.SystemButton\.(.*)/;
	var match = systemButton.match(RE);
	if (match) {
		if (match[1] === 'iPhone') {
			logger.warn([
				'Ti.UI.iPhone.SystemButton (line ' + node.lineNumber + ') is deprecated as of Titanium ' + MIN_VERSION,
				'Use Ti.UI.iOS.SystemButton instead'
			]);
		}
		systemButton = match[2];
	}
	if (_.includes(systemButtons, systemButton)) {
		node.setAttribute('systemButton', 'Ti.UI.' + iOSProxy + '.SystemButton.' + systemButton);
	}

	// Generate runtime code using default
	return require('./default').parse(node, state);
}
