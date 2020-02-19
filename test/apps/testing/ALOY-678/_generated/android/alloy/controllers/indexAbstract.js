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
        _this["index"] = Ti.UI.createWindow({ id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        var __alloyId1 = {};
        var __alloyId4 = [];
        var __alloyId6 = { type: 'Ti.UI.View', childTemplates: (function () { var __alloyId7 = []; var __alloyId9 = { type: 'Ti.UI.ImageView', bindId: 'image', properties: { bindId: "image", width: 60, left: 10, }, }; __alloyId7.push(__alloyId9); var __alloyId11 = { type: 'Ti.UI.View', childTemplates: (function () { var __alloyId12 = []; var __alloyId14 = { type: 'Ti.UI.Label', bindId: 'label', properties: { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", bindId: "label", }, }; __alloyId12.push(__alloyId14); return __alloyId12; })(), properties: { backgroundColor: "#a00", height: 50, width: 130, }, }; __alloyId7.push(__alloyId11); var __alloyId16 = { type: 'Ti.UI.View', childTemplates: (function () { var __alloyId17 = []; var __alloyId19 = { type: 'Ti.UI.View', childTemplates: (function () { var __alloyId20 = []; var __alloyId22 = { type: 'Ti.UI.Button', bindId: 'button', properties: { bindId: "button", height: 40, width: 50, }, }; __alloyId20.push(__alloyId22); return __alloyId20; })(), properties: { backgroundColor: "#0f0", height: 50, width: 60, }, }; __alloyId17.push(__alloyId19); return __alloyId17; })(), properties: { backgroundColor: "#00f", height: 60, width: 80, right: 10, }, }; __alloyId7.push(__alloyId16); return __alloyId7; })(), properties: { backgroundColor: "#aa0", }, };
        __alloyId4.push(__alloyId6);
        var __alloyId3 = { properties: { name: "template1", height: 70, }, childTemplates: __alloyId4, };
        __alloyId1["template1"] = __alloyId3;
        var __alloyId24 = [];
        _this["__alloyId25"] = { image: { image: "/appc.png", }, label: { text: "ugly rows", }, button: { title: "Hi", }, };
        __alloyId24.push(_this["__alloyId25"]);
        _this["__alloyId26"] = { image: { image: "/appc.png", }, label: { text: "nested views", }, button: { title: "there", }, };
        __alloyId24.push(_this["__alloyId26"]);
        _this["__alloyId27"] = { image: { image: "/appc.png", }, label: { text: "\"colorful\"", }, button: { title: "!", }, };
        __alloyId24.push(_this["__alloyId27"]);
        _this["section"] = Ti.UI.createListSection({ id: "section", });
        _this["section"].items = __alloyId24;
        var __alloyId28 = [];
        __alloyId28.push(_this["section"]);
        _this["__alloyId0"] = Ti.UI.createListView({ sections: __alloyId28, templates: __alloyId1, defaultItemTemplate: "template1", });
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId25"] = _this.__alloyId25;
        _this.__views["__alloyId26"] = _this.__alloyId26;
        _this.__views["__alloyId27"] = _this.__alloyId27;
        _this.__views["section"] = _this.section;
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
