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
        _this.win.open();
        return _this;
    }
    index.prototype.expand = function () {
        this.item3 && this.item3.expandActionView();
    };
    index.prototype.collapse = function () {
        this.item3 && this.item3.collapseActionView();
    };
    index.prototype.report = function (e) {
        Ti.API.info(e.type);
        this.item3 && Ti.API.info(this.item3.actionViewExpanded.toString());
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
