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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", top: alloy_1.default.Globals.winTop, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        if ((OS_IOS)) {
            var __alloyId0 = {};
            var __alloyId2 = [];
            var __alloyId5 = { type: 'Ti.UI.Button', properties: { height: "50dp", width: Ti.UI.SIZE, right: 0, title: 'Right', }, events: { click: _this.clickRightButton.bind(_this), }, };
            var __alloyId6 = { type: 'Ti.UI.TextField', bindId: 'textfield', childTemplates: (function () { var __alloyId7 = []; var __alloyId8 = { type: 'Ti.UI.Button', properties: { height: "50dp", width: Ti.UI.SIZE, right: 0, title: 'Right', }, events: { click: _this.clickRightButton.bind(_this), }, }; __alloyId7.push(__alloyId8); return __alloyId7; })(), properties: { width: Ti.UI.FILL, bottom: 0, font: { fontSize: 12, }, borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS, rightButton: __alloyId5, bindId: "textfield", autocorrect: false, hintText: "User name / e-mail address", }, };
            __alloyId2.push(__alloyId6);
            var __alloyId1 = { properties: { name: "inputTemplate", }, childTemplates: __alloyId2, };
            __alloyId0["inputTemplate"] = __alloyId1;
            var __alloyId10 = [];
            _this["__alloyId11"] = { template: "inputTemplate", textfield: { value: "", }, };
            __alloyId10.push(_this["__alloyId11"]);
            _this["idSection"] = Ti.UI.createListSection({ headerTitle: "Login Id", id: "idSection", });
            _this["idSection"].items = __alloyId10;
            var __alloyId12 = [];
            __alloyId12.push(_this["idSection"]);
            _this["listView"] = Ti.UI.createListView({ top: 20, sections: __alloyId12, templates: __alloyId0, id: "listView", });
            _this["index"].add(_this["listView"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["idSection"] = _this.idSection;
        _this.__views["listView"] = _this.listView;
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
