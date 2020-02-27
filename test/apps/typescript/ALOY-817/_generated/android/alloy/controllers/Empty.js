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
var EmptyAbstract_1 = require("/controllers/EmptyAbstract");
var Empty = /** @class */ (function (_super) {
    __extends(Empty, _super);
    function Empty(args) {
        var _this = _super.call(this, args) || this;
        _this.Empty.fireEvent('click');
        setTimeout(function () {
            _this.trigger('init');
        }, 2000);
        return _this;
    }
    Empty.prototype.buttonClick = function (e) {
        e.cancelBubble = true;
        Ti.API.info('button clicked');
    };
    return Empty;
}(EmptyAbstract_1.EmptyAbstract));
exports.default = Empty;
