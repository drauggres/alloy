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
Alloy.Globals.someProperty = true;
Alloy.Globals.isIOS7 = (OS_IOS && parseInt(Ti.Platform.version, 10) >= 7);
Alloy.Globals.isTalliPhone = (OS_IOS && Ti.Platform.displayCaps.platformHeight == 568);
new index_1.default();
