const path = require('path');
const NAME_SYMBOL = Symbol('name');
const INSTANCES = [];
const SET = new Set();

const DB_INSTANCE_RE = /\[apply]\(\[apply]\(Titanium\.Database\.(?:open|install)\)\.execute\).*/;

const API_NAME_MOCK = [
	{
		regexp: /\[apply]\(Titanium.UI.create(.*)\).*/,
		format: match => {
			return `Ti.UI.${match[1]}`;
		},
	},
	{
		regexp: /\[apply]\(ru.netris.mobile.exoplayer(.*)createVideoPlayer\).*/,
		format: () => {
			return 'Ru.Netris.Mobile.Exoplayer';
		},
	},
];

let GlobalLoggingEnabled = true;
let PlaceLoggingEnabled = false;

function getPlace(callsite) {
	const filename = callsite.getFileName() ? path.relative(__dirname, callsite.getFileName()) : '<unknown>';
	const line = callsite.getLineNumber();
	const coll = callsite.getColumnNumber();
	const out = `${filename}:${line}:${coll}`;
	return out;
}

Error.stackTraceLimit = 100;

Error.prepareStackTrace = (error, structuredStackTrace) => {
	if (error.message === 'STACK' && structuredStackTrace.length > 2) {
		const result = [];
		const length = structuredStackTrace.length;
		let i = 2;
		let count = 0;
		while (i < length && count < 10) {
			const string = getPlace(structuredStackTrace[i]);
			if (string.indexOf('internal') !== 0 && string.indexOf('p.js:23:30') !== 0) {
				count++;
				result.push(string);
			}
			i++;
		}
		const out = result.join(' | ');
		error.place = result;
		return out;
	}
	return structuredStackTrace.map(c => {return getPlace(c);}).join('\n');
};

function getPropMock(name, prop) {
	if (prop === 'apiName') {
		for (const factory of API_NAME_MOCK) {
			const match = name.match(factory.regexp);
			if (match) {
				return {
					found: true,
					value:factory.format(match)
				};
			}
		}
	} else if (prop === 'isValidRow' && name.match(DB_INSTANCE_RE)) {
		return {
			found: true,
			value: () => { return false; }
		};
	}
	return { found: false };
}

function Logger(name) {
	this.name = name;
}

Logger.prototype.log = function(trap, ...args) {
	const list = [];
	for (let i = 0, l = args.length; i < l; i++) {
		try {
			const arg = args[i];
			if (arg && arg[NAME_SYMBOL]) {
				list.push(arg[NAME_SYMBOL]);
			} else if (typeof arg === 'function') {
				list.push(Object.prototype.toString.apply(arg));
			} else {
				list.push(arg);
			}
		} catch (e) {
			console.error(e.message);
			console.error(e.stack);
			list.push('<ERROR>');
		}
	}
	const temp = new Error('STACK');
	temp.stack;
	if (GlobalLoggingEnabled) {
		const logObject = { name: this.name, trap: trap, args: list };
		if (PlaceLoggingEnabled) {
			logObject.place = temp.place;
		}
		console.log(JSON.stringify(logObject, null, '  '));
	}
};

function createScopeLogger(name, args) {
	if (!INSTANCES[name]) {
		INSTANCES[name] = 1;
	} else {
		name = `${name}<#${INSTANCES[name]++}>`;
	}
	const scope = () => {
		/* new proxy */
	};
	scope.toString = () => {
		return `"{${name}}"`;
	};
	scope[Symbol.toPrimitive] = hint => {
		return `"{${name}}[Symbol.toPrimitive](${hint})"`;
	};
	const logger = new Logger(name);
	const removedSymbol = Symbol('removed');
	const undefinedSymbol = Symbol('undefined');
	let prototypeValue = {};
	let isExtensible = true;
	const proxy = new Proxy(scope, {
		getPrototypeOf(target) {
			logger.log('getPrototypeOf');
			return prototypeValue;
		},
		setPrototypeOf(target, targetProto) {
			logger.log('setPrototypeOf');
			prototypeValue = targetProto;
			return true;
		},
		isExtensible(target) {
			logger.log('isExtensible');
			return isExtensible;
		},
		preventExtensions(target) {
			logger.log('preventExtensions');
			isExtensible = false;
		},
		getOwnPropertyDescriptor(target, prop) {
			logger.log('getOwnPropertyDescriptor', prop);
			const value = target[prop];
			if (typeof value === 'undefined') {
				return undefined;
			}
			return { configurable: true, enumerable: true, value: value };
		},
		defineProperty(target, prop, descriptor) {
			logger.log('getOwnPropertyDescriptor', prop, JSON.stringify(descriptor));
			return true;
		},
		has(target, prop) {
			if (prop === NAME_SYMBOL) {
				return true;
			}
			logger.log('has', prop);
			return true;
		},
		get(target, prop) {
			if (prop === NAME_SYMBOL) {
				return `"{${name}}"`;
			}
			if (prop === 'toString') {
				return scope.toString;
			}
			if (prop === 'toJSON') {
				return scope.toString;
			}
			if (prop === Symbol.toStringTag) {
				return scope.toString;
			}
			logger.log('get', prop);
			const { found, value } = getPropMock(name, prop);
			if (found) {
				return value;
			}
			if (target[prop] === removedSymbol) {
				return void 0;
			}
			if (target[prop] === undefinedSymbol) {
				return void 0;
			}
			if (typeof target[prop] === 'undefined') {
				const p = createScopeLogger(name + '.' + prop.toString());
				scope[prop] = p;
				return p;
			}
			if (typeof args === 'object' && args && typeof args[prop] !== 'undefined') {
				return args[prop];
			}
			return target[prop];
		},
		set(target, prop, value) {
			logger.log('set', prop, value);
			target[prop] = value;
			return true;
		},
		deleteProperty(target, prop) {
			logger.log('deleteProperty', prop);
			if (prop in target) {
				target[prop] = removedSymbol;
				return true;
			}
		},
		ownKeys(target) {
			logger.log('ownKeys');
			return Reflect.ownKeys(target);
		},
		apply: function(target, thisArg, argumentsList) {
			const thisName = thisArg ? thisArg.toString() : thisArg;
			logger.log('apply', `(this: ${thisName})`, ...argumentsList);
			const p = createScopeLogger(`[apply](${name})`, {
				thisArg: thisArg,
				argumentsList: argumentsList,
			});
			return p;
		},
		construct(target, args) {
			logger.log('construct', JSON.stringify(args));
			return createScopeLogger(name + '[instance]', args);
		},
	});
	SET.add(proxy);
	return proxy;
}

function setLoggingIsEnabled(value) {
	GlobalLoggingEnabled = value;
}

function getLoggingIsEnabled() {
	return GlobalLoggingEnabled;
}

function setLogPlace(value) {
	PlaceLoggingEnabled = value;
}

exports.createScopeLogger = createScopeLogger;
exports.setLoggingIsEnabled = setLoggingIsEnabled;
exports.getLoggingIsEnabled = getLoggingIsEnabled;
exports.setLogPlace = setLogPlace;
