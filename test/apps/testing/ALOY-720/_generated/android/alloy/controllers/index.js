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
Object.defineProperty(exports, "__esModule", { value: true });
var indexAbstract_1 = require("/controllers/indexAbstract");
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        if (!_this.info || !_this.index) {
            return _this;
        }
        if (OS_IOS || OS_MOBILEWEB) {
            _this.info.text = 'Click the rightNavButton to "save"';
        }
        else if (OS_ANDROID) {
            _this.info.text = 'Click the menu button to "save"';
        }
        else {
            _this.info.text = 'This app supported on Android, MobileWeb, and iOS only.';
        }
        _this.index.open();
        return _this;
    }
    index.prototype.doSave = function () {
        alert('save');
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
