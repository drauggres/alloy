"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("/controllers/index"));
var supported = false;
if (OS_IOS) {
    var major = Ti.Platform.version.split('.')[0];
    if (major && parseInt(major, 10) <= 6) {
        supported = true;
    }
}
new index_1.default();
