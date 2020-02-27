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
        _this.info = void 0;
        _this.__alloyId5 = void 0;
        _this.__alloyId3 = void 0;
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
        if ((OS_IOS)) {
            _this["__alloyId0"] = Ti.UI.createWindow({ title: "NavigationWindow", });
            _this["__alloyId2"] = alloy_1.default.createWidget('alloy.button', 'widget', { title: "ios", });
            _this["__alloyId2"] && _this["__alloyId2"].on('click', _this.doSave.bind(_this));
            _this["__alloyId0"].rightNavButton = _this["__alloyId2"].getViewEx({ recurse: true });
            _this["info"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#000", textAlign: "center", font: { fontSize: "24dp", fontWeight: "bold", }, id: "info", });
            _this["__alloyId0"].add(_this["info"]);
            _this["index"] = Ti.UI.createNavigationWindow({ backgroundColor: "#fff", modal: false, exitOnClose: true, window: _this["__alloyId0"], id: "index", });
            _this["index"] && _this.addTopLevelView(_this["index"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["info"] = _this.info;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["index"] = _this.index;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId3"] = _this.__alloyId3;
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
