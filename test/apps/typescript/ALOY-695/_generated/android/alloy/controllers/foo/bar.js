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
var barAbstract_1 = require("/controllers/foo/barAbstract");
var ctr = 0;
var bar = /** @class */ (function (_super) {
    __extends(bar, _super);
    function bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bar.prototype.addNewLabel = function (e) {
        var index = ctr % Alloy.Globals.classes.length;
        var label = this.UI.create('Label', {
            classes: Alloy.Globals.classes[index],
            id: 'newLabel' + (ctr + 1),
            text: 'this is label #' + (ctr + 1),
            touchEnabled: false
        });
        this.bar.add(label);
        ctr++;
    };
    return bar;
}(barAbstract_1.barAbstract));
exports.default = bar;
