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
        _this["ptr"] = Ti.UI.createRefreshControl({ id: "ptr", tintColor: "#008", });
        var __alloyId0 = [];
        _this["__alloyId1"] = Ti.UI.createTableViewRow({ title: "tableview", });
        __alloyId0.push(_this["__alloyId1"]);
        _this["__alloyId2"] = Ti.UI.createTableViewRow({ title: "drag down to show refreshControl", });
        __alloyId0.push(_this["__alloyId2"]);
        _this["__alloyId3"] = Ti.UI.createTableViewRow({ title: "click here to open listview", });
        __alloyId0.push(_this["__alloyId3"]);
        _this["__alloyId3"] && _this.addListener(_this["__alloyId3"], 'click', _this.openList.bind(_this));
        _this["jobList"] = Ti.UI.createTableView({ data: __alloyId0, refreshControl: _this["ptr"], id: "jobList", filterAttribute: "title", });
        _this["index"].add(_this["jobList"]);
        _this["listWin"] = Ti.UI.createWindow({ id: "listWin", });
        _this["listWin"] && _this.addTopLevelView(_this["listWin"]);
        _this["ptr"] = Ti.UI.createRefreshControl({ id: "ptr", tintColor: "#800", });
        var __alloyId6 = [];
        _this["__alloyId7"] = { properties: { title: "listview", }, };
        __alloyId6.push(_this["__alloyId7"]);
        _this["__alloyId8"] = { properties: { title: "drag down to show refreshControl", }, };
        __alloyId6.push(_this["__alloyId8"]);
        _this["__alloyId4"] = Ti.UI.createListSection({});
        _this["__alloyId4"].items = __alloyId6;
        var __alloyId9 = [];
        __alloyId9.push(_this["__alloyId4"]);
        _this["jobList"] = Ti.UI.createListView({ sections: __alloyId9, refreshControl: _this["ptr"], id: "jobList", });
        _this["listWin"].add(_this["jobList"]);
        _this["jobList"] && _this.addListener(_this["jobList"], 'click', _this.openList.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["ptr"] = _this.ptr;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["jobList"] = _this.jobList;
        _this.__views["index"] = _this.index;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["listWin"] = _this.listWin;
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
