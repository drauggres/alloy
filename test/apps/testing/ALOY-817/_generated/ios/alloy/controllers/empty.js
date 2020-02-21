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
var emptyAbstract_1 = require("/controllers/emptyAbstract");
var empty = /** @class */ (function (_super) {
    __extends(empty, _super);
    function empty(args) {
        var _this = _super.call(this, args) || this;
        _this.empty.fireEvent('click');
        setTimeout(function () {
            _this.trigger('init');
        }, 2000);
        return _this;
    }
    empty.prototype.buttonClick = function (e) {
        e.cancelBubble = true;
        Ti.API.info('button clicked');
    };
    return empty;
}(emptyAbstract_1.emptyAbstract));
exports.default = empty;
