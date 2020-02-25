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
        var __alloyId1 = [];
        var __alloyId2 = {};
        var __alloyId5 = [];
        var __alloyId6 = { type: 'Ti.UI.Label', bindId: 'info', properties: { color: "black", font: { fontFamily: "Arial", fontSize: "20dp", fontWeight: "bold", }, left: "10dp", top: 0, bindId: "info", }, };
        __alloyId5.push(__alloyId6);
        var __alloyId7 = { type: 'Ti.UI.Label', bindId: 'es_info', properties: { color: "gray", font: { fontFamily: "Arial", fontSize: "14dp", }, left: "10dp", top: "25dp", bindId: "es_info", }, };
        __alloyId5.push(__alloyId7);
        var __alloyId4 = { properties: { name: "template", }, childTemplates: __alloyId5, };
        __alloyId2["template"] = __alloyId4;
        var __alloyId10 = [];
        _this["__alloyId11"] = { info: { text: "Apple", }, es_info: { text: "Manzana", }, };
        __alloyId10.push(_this["__alloyId11"]);
        _this["__alloyId12"] = { info: { text: "Banana", }, es_info: { text: "Banana", }, };
        __alloyId10.push(_this["__alloyId12"]);
        _this["__alloyId8"] = Ti.UI.createListSection({ headerTitle: "Fruit / Frutas", });
        _this["__alloyId8"].items = __alloyId10;
        var __alloyId13 = [];
        __alloyId13.push(_this["__alloyId8"]);
        var __alloyId16 = [];
        _this["__alloyId17"] = { info: { text: "Carrot", }, es_info: { text: "Zanahoria", }, };
        __alloyId16.push(_this["__alloyId17"]);
        _this["__alloyId18"] = { info: { text: "Potato", }, es_info: { text: "Patata", }, };
        __alloyId16.push(_this["__alloyId18"]);
        _this["__alloyId14"] = Ti.UI.createListSection({ headerTitle: "Vegetables / Verduras", });
        _this["__alloyId14"].items = __alloyId16;
        __alloyId13.push(_this["__alloyId14"]);
        var __alloyId21 = [];
        _this["__alloyId22"] = { info: { text: "Corn", }, es_info: { text: "Maiz", }, };
        __alloyId21.push(_this["__alloyId22"]);
        _this["__alloyId23"] = { info: { text: "Rice", }, es_info: { text: "Arroz", }, };
        __alloyId21.push(_this["__alloyId23"]);
        _this["__alloyId19"] = Ti.UI.createListSection({ headerTitle: "Grains / Granos", });
        _this["__alloyId19"].items = __alloyId21;
        __alloyId13.push(_this["__alloyId19"]);
        _this["listView"] = Ti.UI.createListView({ sections: __alloyId13, templates: __alloyId2, id: "listView", defaultItemTemplate: "template", });
        __alloyId1.push(_this["listView"]);
        var __alloyId26 = [];
        _this["__alloyId27"] = { properties: { title: "List item 1", }, };
        __alloyId26.push(_this["__alloyId27"]);
        _this["__alloyId28"] = { properties: { title: "List item 2", }, };
        __alloyId26.push(_this["__alloyId28"]);
        _this["__alloyId29"] = { properties: { title: "List item 3", }, };
        __alloyId26.push(_this["__alloyId29"]);
        _this["__alloyId24"] = Ti.UI.createListSection({});
        _this["__alloyId24"].items = __alloyId26;
        var __alloyId30 = [];
        __alloyId30.push(_this["__alloyId24"]);
        _this["list"] = Ti.UI.createListView({ sections: __alloyId30, id: "list", });
        __alloyId1.push(_this["list"]);
        _this["__alloyId0"] = Ti.UI.createScrollableView({ top: 20, showPagingControl: true, pagingControlColor: "black", views: __alloyId1, });
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId12"] = _this.__alloyId12;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId17"] = _this.__alloyId17;
        _this.__views["__alloyId18"] = _this.__alloyId18;
        _this.__views["__alloyId14"] = _this.__alloyId14;
        _this.__views["__alloyId22"] = _this.__alloyId22;
        _this.__views["__alloyId23"] = _this.__alloyId23;
        _this.__views["__alloyId19"] = _this.__alloyId19;
        _this.__views["listView"] = _this.listView;
        _this.__views["__alloyId27"] = _this.__alloyId27;
        _this.__views["__alloyId28"] = _this.__alloyId28;
        _this.__views["__alloyId29"] = _this.__alloyId29;
        _this.__views["__alloyId24"] = _this.__alloyId24;
        _this.__views["list"] = _this.list;
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
