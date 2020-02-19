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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexAbstract_1 = require("/controllers/indexAbstract");
var row_1 = __importDefault(require("/controllers/row"));
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        var rows = [];
        var titles = ['Lord of the Rings', 'Harry Potter', 'Eragon', 'Wheel of Time', 'Narnia'];
        for (var i = 0, j = titles.length; i < j; i++) {
            rows.push(new row_1.default({ title: titles[i] }).row);
        }
        _this.table.data = rows;
        function doFoo(num) {
            alert('Your rating = ' + num);
        }
        _this.starwidget.init(doFoo);
        _this.index.open();
        return _this;
    }
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
