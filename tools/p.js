const MODULE = require('module');
const {
	createScopeLogger,
	setLoggingIsEnabled,
	getLoggingIsEnabled,
	setLogPlace
} = require('./l');
const path = require('path');
const fs = require('fs');

const originalRequire = MODULE.prototype.require;
const originalSetTimeout = setTimeout;
const Cache = new Map();

let appDir = __dirname;

setLoggingIsEnabled(false);

function tryToRequire(orig, p) {
	let result;
	try {
		result = originalRequire.call(this, p);
	} catch (e) {
		if (e.code === 'MODULE_NOT_FOUND') {
			return null;
		}
		throw e;
	}
	// if (getLoggingIsEnabled()) {
	//   console.log(`require('${name}')`);
	// }
	Cache.set(orig, result);
	return result;
}

MODULE.prototype.require = function(a) {
	let name = a;
	if (Cache.has(name)) {
		return Cache.get(name);
	}
	let result;
	if (name === 'alloy' || name === '/alloy') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/template/lib/alloy.js')
		);
	} else if (name === 'underscore'
			|| name === '/underscore'
			|| name === 'alloy/underscore'
			|| name === '/alloy/underscore') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/lib/', name)
		);
	} else if (name === 'backbone'
			|| name === '/backbone'
			|| name === 'alloy/backbone'
			|| name === '/alloy/backbone') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/lib/', name, '/1.4.0/backbone')
		);
	} else if (name.indexOf('sync/') === 0
			|| name.indexOf('/sync/') === 0
			|| name.indexOf('alloy/sync/') === 0
			|| name.indexOf('/alloy/sync/') === 0) {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/lib/', name)
		);
	} else if (name === 'controllers/BaseController'
			|| name === '/controllers/BaseController'
			|| name === 'alloy/controllers/BaseController'
			|| name === '/alloy/controllers/BaseController') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/lib/', name)
		);
		if (!result) {
			result = tryToRequire(
				a,
				path.join(__dirname, '../Alloy/lib/BaseController', name)
			);
		}
	} else if (name === 'widget'
			|| name === '/widget'
			|| name === 'alloy/widget'
			|| name === '/alloy/widget') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/lib', name)
		);
	} else if (name === 'constants'
			|| name === '/constants'
			|| name === 'alloy/constants'
			|| name === '/alloy/constants') {
		result = tryToRequire(
			a,
			path.join(__dirname, '../Alloy/common/constants')
		);
	} else if (name.indexOf('/controllers') === 0) {
		result = tryToRequire(
			a,
			path.join(appDir, 'alloy', name)
		);
	} else if (name.indexOf('/models') === 0) {
		result = tryToRequire(
			a,
			path.join(appDir, 'alloy', name)
		);
	} else if (name.indexOf('/widgets') === 0) {
		result = tryToRequire(
			a,
			path.join(appDir, 'alloy', name)
		);
	} else {
		result =
      tryToRequire(a, path.join(appDir, name)) ||
      tryToRequire(a, path.join(appDir, 'node_modules', name)) ||
      tryToRequire(a, path.join(appDir, 'node_modules', name, name)) ||
      tryToRequire(a, path.join(appDir, 'node_modules', name, 'index')) ||
      tryToRequire(a, name);

		if (!result) {
			console.log(`require('${name}'). Not found. Return ScopeLogger`);
			result = createScopeLogger(a);
			Cache.set(name, result);
		}
	}
	return result;
};

global.Ti = global.Titanium = createScopeLogger('Titanium');
global.kroll = createScopeLogger('kroll');
global.Module = createScopeLogger('Module');

global.L = function(a, b) {
	if (typeof b !== 'undefined') {
		return b;
	}
	return a;
};
global.alert = createScopeLogger('alert');

global.setTimeout = createScopeLogger('setTimeout');
global.setInterval = createScopeLogger('setInterval');

function logRequire(name) {
	console.log(`> require('${name}')`);
	return require(name);
}

function logNewModule(name, className = 'default', params) {
	const m = require(name);
	const c = m[className];
	new c(params);
}

function logCreateController(list, name, params) {
	console.log(`> createController('${name}')`);
	return require('alloy').createController(list[name], params);
}

const TS = __dirname.indexOf('build_ts') !== -1;

setLoggingIsEnabled(false);
setLogPlace(false);

Object.keys(process.env).filter(name => {
	return name.indexOf('TEST_') === 0;
}).forEach(name => {
	const env = name.substr(5);
	if (process.env[name] === 'true') {
		global[env] = true;
	} else if (process.env[name] === 'false') {
		global[env] = false;
	} else {
		global[env] = process.env[name];
	}
});

try {
	global.Alloy = require('alloy');
	global.Backbone = Alloy.Backbone;
	global._ = Alloy._;
	setLoggingIsEnabled(true);
	// setLogPlace(true);
	if (process.argv.length === 4) {
		const platform = process.argv[2];
		appDir = process.argv[3];
		const appFile = path.join(appDir, '../../alloy.js');
		if (fs.existsSync(appFile)) {
			logRequire(appFile);
		}
		Alloy.createController('index');
	}
} catch (e) {
	console.error(e.message);
	console.error(e.stack);
	process.exit(1);
}
