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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", top: "20dp", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        var __alloyId1 = {};
        var __alloyId4 = [];
        var __alloyId7 = { type: 'Ti.UI.Label', bindId: 'lHintText', properties: { height: Ti.UI.SIZE, width: Ti.UI.FILL, textAlign: "left", color: "#000", bottom: 0, font: { fontSize: 10, fontWeight: "bold", }, bindId: "lHintText", }, };
        var __alloyId8 = { type: 'Ti.UI.TextArea', bindId: 'cMsg', childTemplates: (function () { var __alloyId9 = []; var __alloyId10 = { type: 'Ti.UI.Label', bindId: 'lHintText', properties: { height: Ti.UI.SIZE, width: Ti.UI.FILL, textAlign: "left", color: "#000", bottom: 0, font: { fontSize: 10, fontWeight: "bold", }, bindId: "lHintText", }, }; __alloyId9.push(__alloyId10); return __alloyId9; })(), properties: { height: "30", width: Ti.UI.FILL, textAlign: "left", left: 10, font: { fontSize: 12, fontWeight: "bold", }, bindId: "cMsg", }, };
        __alloyId4.push(__alloyId8);
        var __alloyId3 = { properties: { name: "tMsg", }, childTemplates: __alloyId4, };
        __alloyId1["tMsg"] = __alloyId3;
        var __alloyId13 = [];
        var __alloyId16 = { type: 'Ti.UI.Label', bindId: 'lHintText', properties: { height: Ti.UI.SIZE, width: Ti.UI.FILL, textAlign: "left", color: "#000", bottom: 0, font: { fontSize: 10, fontWeight: "bold", }, bindId: "lHintText", }, };
        var __alloyId17 = { type: 'Ti.UI.TextField', bindId: 'cMsg', childTemplates: (function () { var __alloyId18 = []; var __alloyId19 = { type: 'Ti.UI.Label', bindId: 'lHintText', properties: { height: Ti.UI.SIZE, width: Ti.UI.FILL, textAlign: "left", color: "#000", bottom: 0, font: { fontSize: 10, fontWeight: "bold", }, bindId: "lHintText", }, }; __alloyId18.push(__alloyId19); return __alloyId18; })(), properties: { height: "30", width: Ti.UI.FILL, textAlign: "left", left: 10, font: { fontSize: 12, fontWeight: "bold", }, bindId: "cMsg", }, };
        __alloyId13.push(__alloyId17);
        var __alloyId12 = { properties: { name: "fMsg", }, childTemplates: __alloyId13, };
        __alloyId1["fMsg"] = __alloyId12;
        var __alloyId22 = [];
        _this["__alloyId23"] = { properties: { itemId: "liMessage", }, template: "tMsg", cMsg: { value: "TEXTAREA", }, lHintText: { text: "CHILD LABEL", }, };
        __alloyId22.push(_this["__alloyId23"]);
        _this["__alloyId24"] = { properties: { itemId: "liMessage", }, template: "fMsg", cMsg: { value: "TEXTFIELD", }, lHintText: { text: "CHILD LABEL", }, };
        __alloyId22.push(_this["__alloyId24"]);
        _this["__alloyId20"] = Ti.UI.createListSection({});
        _this["__alloyId20"].items = __alloyId22;
        var __alloyId25 = [];
        __alloyId25.push(_this["__alloyId20"]);
        _this["__alloyId0"] = Ti.UI.createListView({ sections: __alloyId25, templates: __alloyId1, });
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId23"] = _this.__alloyId23;
        _this.__views["__alloyId24"] = _this.__alloyId24;
        _this.__views["__alloyId20"] = _this.__alloyId20;
        _this.__views["__alloyId0"] = _this.__alloyId0;
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
