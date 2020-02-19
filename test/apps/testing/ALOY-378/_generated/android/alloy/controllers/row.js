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
var rowAbstract_1 = require("/controllers/rowAbstract");
var row = /** @class */ (function (_super) {
    __extends(row, _super);
    function row(args) {
        if (args === void 0) { args = {}; }
        var _this = _super.call(this) || this;
        // Here was incorrect assignment in the original code
        // We keeping it with explicit  type casting
        _this.row.title = args.title;
        return _this;
    }
    return row;
}(rowAbstract_1.rowAbstract));
exports.default = row;
