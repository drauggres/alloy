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
var LandingPageAbstract = /** @class */ (function (_super) {
    __extends(LandingPageAbstract, _super);
    function LandingPageAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__controllerPath = LandingPageAbstract.controllerPath;
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
        _this["landingPageWindow"] = Ti.UI.createWindow({ backgroundColor: "#000", id: "landingPageWindow", });
        _this["landingPageWindow"] && _this.addTopLevelView(_this["landingPageWindow"]);
        _this["loading"] = alloy_1.default.createWidget('com.appcelerator.loading', 'widget', { id: "loading", opacity: 1, __parentSymbol: _this["landingPageWindow"], });
        _this["loading"].setParent(_this["landingPageWindow"]);
        _this["__alloyId0"] = Ti.UI.createButton({ top: 200, width: 200, height: 50, title: 'CLOSE WINDOW', });
        _this["landingPageWindow"].add(_this["__alloyId0"]);
        _this["__alloyId0"] && _this.addListener(_this["__alloyId0"], 'click', _this.closeWindow.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["loading"] = _this.loading;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["landingPageWindow"] = _this.landingPageWindow;
        return _this;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        // </postcode>
    }
    LandingPageAbstract.prototype.destroy = function () {
    };
    LandingPageAbstract.controllerPath = 'LandingPage';
    return LandingPageAbstract;
}(BaseController_1.default));
exports.LandingPageAbstract = LandingPageAbstract;
