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
var index_1 = __importDefault(require("/controllers/index"));
var Test_1 = require("/models/Test");
// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var collection = Alloy.Collections.instance('Test');
var models = [];
for (var i = 0; i < 20; i++) {
    models.push(new Test_1.Model({
        title: 'title #' + (i + 1),
        subtitle: 'this is a boring subtitle',
        image: '/' + i + '.png'
    }));
}
collection.reset(models);
new index_1.default();
