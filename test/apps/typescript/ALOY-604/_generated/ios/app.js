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
var Backbone = __importStar(require("backbone"));
var data = Alloy.Collections.data = new Backbone.Collection();
var models = [];
for (var i = 0; i < 20; i++) {
    models.push({ text: 'label #' + (i + 1) });
}
data.reset(models);
new index_1.default();
