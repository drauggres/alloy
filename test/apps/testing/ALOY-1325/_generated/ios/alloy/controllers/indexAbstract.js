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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        if ((OS_IOS)) {
            _this["__alloyId3"] = Ti.UI.createView({});
            _this["__alloyId4"] = Ti.UI.createLabel({ text: 'Hello Preview', });
            _this["__alloyId3"].add(_this["__alloyId4"]);
            var __alloyId5 = [];
            _this["__alloyId7"] = Ti.UI.iOS.createPreviewAction({ title: "Email", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE, });
            __alloyId5.push(_this["__alloyId7"]);
            _this["__alloyId7"] && _this.addListener(_this["__alloyId7"], 'click', _this.fn.bind(_this));
            _this["__alloyId9"] = Ti.UI.iOS.createPreviewAction({ title: "Confirm", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED, });
            _this["__alloyId9"] && _this.addListener(_this["__alloyId9"], 'click', _this.fn.bind(_this));
            _this["__alloyId10"] = Ti.UI.iOS.createPreviewAction({ title: "Cancel", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED, });
            _this["__alloyId10"] && _this.addListener(_this["__alloyId10"], 'click', _this.fn.bind(_this));
            _this["__alloyId8"] = Ti.UI.iOS.createPreviewActionGroup({ actions: [_this["__alloyId9"], _this["__alloyId10"]], title: "Delete", });
            __alloyId5.push(_this["__alloyId8"]);
            _this["__alloyId1"] = Ti.UI.iOS.createPreviewContext({ preview: _this["__alloyId3"], actions: __alloyId5, });
            _this["__alloyId1"] && _this.addListener(_this["__alloyId1"], 'peek', _this.fn.bind(_this));
        }
        var __alloyId13 = [];
        _this["__alloyId14"] = { properties: { title: "Hello", }, };
        __alloyId13.push(_this["__alloyId14"]);
        _this["__alloyId11"] = Ti.UI.createListSection({});
        _this["__alloyId11"].items = __alloyId13;
        var __alloyId15 = [];
        __alloyId15.push(_this["__alloyId11"]);
        _this["__alloyId0"] = Ti.UI.createListView({ sections: __alloyId15, previewContext: _this["__alloyId1"], });
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId14"] = _this.__alloyId14;
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId0"] = _this.__alloyId0;
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
