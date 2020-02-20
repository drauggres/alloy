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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        var __alloyId0 = 2;
        var __alloyId1 = 3;
        var __alloyId3 = [];
        __alloyId3.push("button 1");
        __alloyId3.push("button 2");
        if ((OS_ANDROID)) {
            _this["androidView"] = Ti.UI.createView({ id: "androidView", layout: "horizontal", });
            _this["avLabel"] = Ti.UI.createLabel({ color: "#fff", left: "20dp", height: Ti.UI.SIZE, width: Ti.UI.SIZE, textAlign: "center", font: { fontSize: "16dp", }, id: "avLabel", text: "This is a label", });
            _this["androidView"].add(_this["avLabel"]);
        }
        _this["options"] = Ti.UI.createOptionDialog({ buttonNames: __alloyId3, androidView: _this["androidView"], id: "options", title: "App Options", destructive: 3, cancel: 2, });
        _this["__alloyId6"] = Ti.UI.createButton({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, title: 'options', });
        _this["index"].add(_this["__alloyId6"]);
        _this["__alloyId6"] && _this.addListener(_this["__alloyId6"], 'click', _this.showOptions.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["avLabel"] = _this.avLabel;
        _this.__views["androidView"] = _this.androidView;
        _this.__views["options"] = _this.options;
        _this.__views["__alloyId6"] = _this.__alloyId6;
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
