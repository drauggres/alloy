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
        _this.refreshMenuItem = void 0;
        _this.settingsMenuItem = void 0;
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
        var __alloyId0 = [];
        _this["__alloyId2"] = Ti.UI.createWindow({ title: "tab 1", backgroundColor: "#fff", });
        _this["__alloyId1"] = Ti.UI.createTab({ window: _this["__alloyId2"], title: "tab 1", });
        __alloyId0.push(_this["__alloyId1"]);
        _this["__alloyId4"] = Ti.UI.createWindow({ title: "tab 2", backgroundColor: "#fff", });
        _this["__alloyId3"] = Ti.UI.createTab({ window: _this["__alloyId4"], title: "tab 2", });
        __alloyId0.push(_this["__alloyId3"]);
        _this["ScheduleGroup"] = Ti.UI.createTabGroup({ tabs: __alloyId0, id: "ScheduleGroup", activeTabIconTint: "yellow", tabsBackgroundSelectedColor: "yellow", });
        _this["ScheduleGroup"] && _this.addTopLevelView(_this["ScheduleGroup"]);
        _this["ScheduleGroup"] && _this.addListener(_this["ScheduleGroup"], 'open', _this.doOnOpen.bind(_this));
        _this["ScheduleGroup"] && _this.addListener(_this["ScheduleGroup"], 'focus', _this.doOnFocus.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["refreshMenuItem"] = _this.refreshMenuItem;
        _this.__views["settingsMenuItem"] = _this.settingsMenuItem;
        _this.__views["ScheduleGroup"] = _this.ScheduleGroup;
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
