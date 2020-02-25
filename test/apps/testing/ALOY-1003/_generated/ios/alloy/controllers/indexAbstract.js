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
        var __alloyId0 = {};
        var __alloyId3 = [];
        var __alloyId5 = { type: 'Ti.UI.Label', bindId: 'type', properties: { bindId: "type", }, };
        __alloyId3.push(__alloyId5);
        var __alloyId2 = { properties: { name: "template", height: 25, }, childTemplates: __alloyId3, };
        __alloyId0["template"] = __alloyId2;
        var __alloyId7 = [];
        _this["__alloyId8"] = { template: "template", type: { text: "... Hello ...", }, };
        __alloyId7.push(_this["__alloyId8"]);
        _this["section"] = Ti.UI.createListSection({ id: "section", });
        _this["section"].items = __alloyId7;
        var __alloyId9 = [];
        __alloyId9.push(_this["section"]);
        _this["list"] = Ti.UI.createListView({ top: 20, bottom: "50dp", sections: __alloyId9, templates: __alloyId0, id: "list", });
        _this["index"].add(_this["list"]);
        _this["__alloyId10"] = Ti.UI.createView({});
        _this["index"].add(_this["__alloyId10"]);
        _this["picker"] = Ti.UI.createPicker({ value: new Date("Mon May 26 2014 00:00:00 GMT+0400 (GMT+03:00)"), top: 200, minDate: new Date("Fri Feb 08 2013 13:30:26 GMT+0400 (GMT+03:00)"), maxDate: new Date("Tue Nov 17 2015 00:00:00 GMT+0300 (GMT+03:00)"), format24: false, calendarViewShown: false, id: "picker", type: Ti.UI.PICKER_TYPE_DATE, });
        _this["__alloyId10"].add(_this["picker"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["section"] = _this.section;
        _this.__views["list"] = _this.list;
        _this.__views["picker"] = _this.picker;
        _this.__views["__alloyId10"] = _this.__alloyId10;
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
