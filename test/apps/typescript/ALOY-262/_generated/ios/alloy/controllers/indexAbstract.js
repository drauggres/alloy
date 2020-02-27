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
        _this.__alloyId13 = void 0;
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
        if ((OS_IOS)) {
            _this["__alloyId0"] = Ti.UI.createView({});
            _this["index"].add(_this["__alloyId0"]);
            var __alloyId3 = [];
            _this["__alloyId4"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.ACTION, });
            __alloyId3.push(_this["__alloyId4"]);
            _this["__alloyId5"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId5"]);
            _this["__alloyId6"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.TRASH, });
            __alloyId3.push(_this["__alloyId6"]);
            _this["__alloyId7"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId7"]);
            _this["__alloyId8"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.ADD, });
            __alloyId3.push(_this["__alloyId8"]);
            _this["__alloyId9"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId9"]);
            _this["__alloyId10"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CAMERA, });
            __alloyId3.push(_this["__alloyId10"]);
            _this["__alloyId11"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });
            __alloyId3.push(_this["__alloyId11"]);
            _this["__alloyId12"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL, });
            __alloyId3.push(_this["__alloyId12"]);
            _this["__alloyId1"] = Ti.UI.createToolbar({ items: __alloyId3, });
            _this["__alloyId0"].add(_this["__alloyId1"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId12"] = _this.__alloyId12;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["__alloyId13"] = _this.__alloyId13;
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
