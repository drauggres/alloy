"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alloy = __importStar(require("alloy"));
var Backbone = __importStar(require("backbone"));
var index_1 = __importDefault(require("/controllers/index"));
var feed = Alloy.Collections.feed = new Backbone.Collection();
feed.reset([
    new Backbone.Model({ first: 'first', second: 'second', third: 'third', fourth: 'fourth' }),
    new Backbone.Model({ first: 'first', second: 'second', third: 'third', fourth: 'fourth' }),
    new Backbone.Model({ first: 'first', second: 'second', third: 'third', fourth: 'fourth' }),
    new Backbone.Model({ first: 'first', second: 'second', third: 'third', fourth: 'fourth' }),
    new Backbone.Model({ first: 'first', second: 'second', third: 'third', fourth: 'fourth' })
]);
new index_1.default();
