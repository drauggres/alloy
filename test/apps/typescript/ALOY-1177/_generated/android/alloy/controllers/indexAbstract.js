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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId1"] = Ti.UI.Android.createSearchView({});
        var __alloyId2 = [];
        _this["__alloyId5"] = Ti.UI.createView({ backgroundColor: "#a00", height: "50dp", });
        _this["__alloyId7"] = Ti.UI.createView({ backgroundColor: "#0a0", height: "50dp", });
        _this["__alloyId3"] = Ti.UI.createTableViewSection({ headerView: _this["__alloyId5"], footerView: _this["__alloyId7"], });
        __alloyId2.push(_this["__alloyId3"]);
        _this["__alloyId8"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 1", });
        _this["__alloyId3"].add(_this["__alloyId8"]);
        _this["__alloyId9"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 2", });
        _this["__alloyId3"].add(_this["__alloyId9"]);
        _this["__alloyId10"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 3", });
        _this["__alloyId3"].add(_this["__alloyId10"]);
        _this["__alloyId11"] = Ti.UI.createTableViewSection({ headerTitle: "Section 2", });
        __alloyId2.push(_this["__alloyId11"]);
        _this["__alloyId12"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 1", });
        _this["__alloyId11"].add(_this["__alloyId12"]);
        _this["__alloyId13"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 2", });
        _this["__alloyId11"].add(_this["__alloyId13"]);
        _this["__alloyId14"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 3", });
        _this["__alloyId11"].add(_this["__alloyId14"]);
        _this["__alloyId15"] = Ti.UI.createTableViewSection({ headerTitle: "Section 3", });
        __alloyId2.push(_this["__alloyId15"]);
        _this["__alloyId16"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 1", });
        _this["__alloyId15"].add(_this["__alloyId16"]);
        _this["__alloyId17"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 2", });
        _this["__alloyId15"].add(_this["__alloyId17"]);
        _this["__alloyId18"] = Ti.UI.createTableViewRow({ height: "50dp", title: "Row 3", });
        _this["__alloyId15"].add(_this["__alloyId18"]);
        _this["__alloyId0"] = Ti.UI.createTableView({ data: __alloyId2, search: _this["__alloyId1"], filterAttribute: "title", });
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId12"] = _this.__alloyId12;
        _this.__views["__alloyId13"] = _this.__alloyId13;
        _this.__views["__alloyId14"] = _this.__alloyId14;
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["__alloyId16"] = _this.__alloyId16;
        _this.__views["__alloyId17"] = _this.__alloyId17;
        _this.__views["__alloyId18"] = _this.__alloyId18;
        _this.__views["__alloyId15"] = _this.__alloyId15;
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
