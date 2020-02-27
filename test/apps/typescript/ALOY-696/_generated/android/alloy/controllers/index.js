"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alloy = __importStar(require("alloy"));
var indexAbstract_1 = require("/controllers/indexAbstract");
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        _this.index.open();
        return _this;
    }
    index.prototype.addLabels = function (e) {
        this.scroller.add(Ti.UI.createLabel(Alloy.createStyle('index', {
            apiName: 'Ti.UI.Label',
            text: 'Alloy.createStyle() + Ti.UI.createLabel()'
        })));
        this.scroller.add(Ti.UI.createLabel(this.createStyle({
            apiName: 'Ti.UI.Label',
            text: '$.createStyle() + Ti.UI.createLabel()'
        })));
        this.scroller.add(Alloy.UI.create('index', 'Ti.UI.Label', {
            text: 'Alloy.UI.create()'
        }));
        this.scroller.add(this.UI.create('Ti.UI.Label', {
            text: '$.UI.create()'
        }));
        this.scroller.add(Alloy.createWidget('alloy.testWidget', 'labelmaker').createLabels());
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
