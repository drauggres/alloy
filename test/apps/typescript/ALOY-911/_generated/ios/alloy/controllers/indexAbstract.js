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
        _this["headerView"] = Ti.UI.createLabel({ backgroundColor: "#3498db", height: "50dp", width: Ti.UI.FILL, color: "#fff", font: { fontSize: "32dp", fontWeight: "bold", }, textAlign: "center", text: 'header view', id: "headerView", });
        var __alloyId1 = [];
        _this["__alloyId2"] = Ti.UI.createTableViewRow({});
        __alloyId1.push(_this["__alloyId2"]);
        _this["__alloyId3"] = Ti.UI.createLabel({ left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold", }, color: "#2c3e50", text: 'row 1', });
        _this["__alloyId2"].add(_this["__alloyId3"]);
        _this["__alloyId4"] = Ti.UI.createTableViewRow({});
        __alloyId1.push(_this["__alloyId4"]);
        _this["__alloyId5"] = Ti.UI.createLabel({ left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold", }, color: "#2c3e50", text: 'row 2', });
        _this["__alloyId4"].add(_this["__alloyId5"]);
        _this["__alloyId6"] = Ti.UI.createTableViewRow({});
        __alloyId1.push(_this["__alloyId6"]);
        _this["__alloyId7"] = Ti.UI.createLabel({ left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold", }, color: "#2c3e50", text: 'row 3', });
        _this["__alloyId6"].add(_this["__alloyId7"]);
        _this["__alloyId8"] = Ti.UI.createTableViewRow({});
        __alloyId1.push(_this["__alloyId8"]);
        _this["__alloyId9"] = Ti.UI.createLabel({ left: "15dp", height: "46dp", font: { fontSize: "24dp", fontWeight: "bold", }, color: "#2c3e50", text: 'row 4', });
        _this["__alloyId8"].add(_this["__alloyId9"]);
        _this["table"] = Ti.UI.createTableView({ top: 0, bottom: "100dp", separatorColor: "#95a5a6", data: __alloyId1, headerView: _this["headerView"], touchEnabled: true, id: "table", });
        _this["index"].add(_this["table"]);
        _this["table"] && _this.addListener(_this["table"], 'click', _this.doClick.bind(_this));
        _this["untouchable"] = Ti.UI.createView({ height: "100dp", backgroundColor: "red", bottom: 0, touchEnabled: false, id: "untouchable", });
        _this["index"].add(_this["untouchable"]);
        _this["untouchable"] && _this.addListener(_this["untouchable"], 'click', _this.doClick.bind(_this));
        _this["untouchableLabel"] = Ti.UI.createLabel({ font: { fontSize: "24dp", fontWeight: "normal", }, color: "#fff", textAlign: "center", text: 'i won\'t respond to clicks', touchEnabled: false, id: "untouchableLabel", });
        _this["untouchable"].add(_this["untouchableLabel"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["headerView"] = _this.headerView;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["table"] = _this.table;
        _this.__views["untouchableLabel"] = _this.untouchableLabel;
        _this.__views["untouchable"] = _this.untouchable;
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
