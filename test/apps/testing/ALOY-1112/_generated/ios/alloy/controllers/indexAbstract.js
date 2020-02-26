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
var alloy_1 = __importDefault(require("alloy"));
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__controllerPath = indexAbstract.controllerPath;
        _this.__parentSymbol = args && args['__parentSymbol'] ? args['__parentSymbol'] : null;
        _this.$model = args && args['$model'] ? args['$model'] : null;
        _this.__itemTemplate = args && args['__itemTemplate'] ? args['__itemTemplate'] : null;
        // Generated code that must be executed before all UI and/or
        // controller code. One example is all model and collection
        // declarations from markup.
        // <precode>
        // </precode>
        // Generated UI code
        // <viewCode>
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "yellow", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId0"] = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 30, color: "#000", font: { fontSize: 12, }, text: 'Background should be YELLOW on ios & android, WHITE on mobile web', });
        _this["index"].add(_this["__alloyId0"]);
        _this["lbl1"] = Ti.UI.createLabel((function () {
            var o = {};
            alloy_1.default.deepExtend(true, o, { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: 30, color: "#000", font: { fontSize: 12, }, });
            if (alloy_1.default.isHandheld)
                alloy_1.default.deepExtend(true, o, { color: "red", });
            alloy_1.default.deepExtend(true, o, { text: 'This should be RED on ios and android handheld, BLACK on others', id: "lbl1", });
            return o;
        })());
        _this["index"].add(_this["lbl1"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["lbl1"] = _this.lbl1;
        _this.__views["index"] = _this.index;
        return _this;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        // </postcode>
    }
    indexAbstract.prototype.destroy = function () {
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
