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
var normalchildAbstract_1 = require("/controllers/normalchildAbstract");
var normalchild = /** @class */ (function (_super) {
    __extends(normalchild, _super);
    function normalchild(args) {
        if (args === void 0) { args = {}; }
        var _this = _super.call(this, args) || this;
        if (args) {
            // Here was incorrect assignment in the original code
            // We keeping it with explicit  type casting
            _this.normallabel.text = args.text;
        }
        return _this;
    }
    return normalchild;
}(normalchildAbstract_1.normalchildAbstract));
exports.default = normalchild;
