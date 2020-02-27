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
        _this["settingsWin"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "settingsWin", title: "Settings", tabBarHidden: true, });
        _this["settingsWin"] && _this.addTopLevelView(_this["settingsWin"]);
        var __alloyId0 = {};
        var __alloyId2 = [];
        var __alloyId3 = { type: 'Ti.UI.TextField', bindId: 'textfield', properties: { bindId: "textfield", autocorrect: false, hintText: "User name / e-mail address", }, events: { change: _this.TFUpdate.bind(_this), }, };
        __alloyId2.push(__alloyId3);
        var __alloyId1 = { properties: { name: "inputTemplate", }, childTemplates: __alloyId2, };
        __alloyId0["inputTemplate"] = __alloyId1;
        var __alloyId5 = [];
        _this["__alloyId6"] = { template: "inputTemplate", textfield: { value: "", }, };
        __alloyId5.push(_this["__alloyId6"]);
        _this["idSection"] = Ti.UI.createListSection({ headerTitle: "Login Id", id: "idSection", });
        _this["idSection"].items = __alloyId5;
        var __alloyId7 = [];
        __alloyId7.push(_this["idSection"]);
        _this["listView"] = Ti.UI.createListView({ sections: __alloyId7, templates: __alloyId0, id: "listView", defaultItemTemplate: "template", allowsSelection: false, });
        _this["settingsWin"].add(_this["listView"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["idSection"] = _this.idSection;
        _this.__views["listView"] = _this.listView;
        _this.__views["settingsWin"] = _this.settingsWin;
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
