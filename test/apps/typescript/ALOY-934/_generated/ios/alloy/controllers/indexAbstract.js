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
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__alloyId11 = void 0;
        _this.__alloyId10 = void 0;
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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        ;
        ;
        var __alloyId3 = [];
        __alloyId3.push("Confirm");
        if ((OS_IOS)) {
            __alloyId3.push("Help");
        }
        __alloyId3.push("Cancel");
        var __alloyId8 = [];
        __alloyId8.push("Help");
        _this["dialog"] = Ti.UI.createOptionDialog({ options: __alloyId3, buttonNames: __alloyId8, id: "dialog", title: "Delete File?", });
        _this["__alloyId12"] = Ti.UI.createLabel({ text: "Click for OptionDialog", });
        _this["index"].add(_this["__alloyId12"]);
        _this["__alloyId12"] && _this.addListener(_this["__alloyId12"], 'click', _this.showOptions.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["dialog"] = _this.dialog;
        _this.__views["__alloyId12"] = _this.__alloyId12;
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
