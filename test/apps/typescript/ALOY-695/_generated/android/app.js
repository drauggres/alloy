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
Alloy.Globals.classes = [
    [],
    ['big'],
    ['blue'],
    'shadow',
    ['shadow'],
    ['shadow', 'big'],
    ['big', 'shadow'],
    ['big', 'blue', 'shadow'],
    'big blue shadow'
];
new index_1.default();
