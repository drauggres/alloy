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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "white", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        if ((OS_IOS)) {
            var __alloyId3 = [];
            _this["__alloyId4"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL, title: "Cancel", });
            __alloyId3.push(_this["__alloyId4"]);
            _this["__alloyId4"] && _this.addListener(_this["__alloyId4"], 'click', _this.btnClick.bind(_this));
            _this["__alloyId5"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId5"]);
            _this["__alloyId6"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CAMERA, title: "Camera", });
            __alloyId3.push(_this["__alloyId6"]);
            _this["__alloyId6"] && _this.addListener(_this["__alloyId6"], 'click', _this.btnClick.bind(_this));
            _this["__alloyId7"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId7"]);
            _this["__alloyId8"] = Ti.UI.createButton({ title: 'Send', style: Ti.UI.iOS.SystemButtonStyle.DONE, });
            __alloyId3.push(_this["__alloyId8"]);
            _this["__alloyId8"] && _this.addListener(_this["__alloyId8"], 'click', _this.btnClick.bind(_this));
            _this["__alloyId1"] = Ti.UI.createToolbar({ items: __alloyId3, });
            _this["textArea"] = Ti.UI.createTextArea({ keyboardToolbarColor: "#999", keyboardToolbarHeight: 40, height: 30, width: "80%", top: 30, borderWidth: 1, borderRadius: 3, borderColor: "#bbb", font: { fontSize: 12, }, value: "Focus to see keyboard with toolbar", keyboardToolbar: _this["__alloyId1"], id: "textArea", });
            _this["index"].add(_this["textArea"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["textArea"] = _this.textArea;
        _this.__views["index"] = _this.index;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        if ((OS_IOS)) {
        }
        if ((OS_IOS)) {
        }
        if ((OS_IOS)) {
        }
        return _this;
        // </postcode>
    }
    indexAbstract.prototype.destroy = function () {
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
