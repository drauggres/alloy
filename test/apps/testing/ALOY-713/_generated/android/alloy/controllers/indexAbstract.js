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
        _this.__controllerPath = indexAbstract.controllerPath;
        _this.__parentSymbol = args && args['__parentSymbol'] ? args['__parentSymbol'] : null;
        _this.$model = args && args['$model'] ? args['$model'] : null;
        _this.__itemTemplate = args && args['__itemTemplate'] ? args['__itemTemplate'] : null;
        // Generated code that must be executed before all UI and/or
        // controller code. One example is all model and collection
        // declarations from markup.
        // <precode>
        alloy_1.default.Collections['feed'].on('fetch destroy change add remove reset', _this.__alloyId30.bind(_this));
        // </precode>
        // Generated UI code
        // <viewCode>
        _this["index"] = Ti.UI.createWindow({ layout: "horizontal", backgroundColor: "#fff", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId0"] = Ti.UI.createView({});
        _this["index"].add(_this["__alloyId0"]);
        _this["__alloyId1"] = Ti.UI.createTableView({ top: 10, separatorColor: "#ffffff", height: 600, });
        _this["__alloyId0"].add(_this["__alloyId1"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId1"] = _this.__alloyId1;
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
        alloy_1.default.Collections['feed'] && alloy_1.default.Collections['feed'].off('fetch destroy change add remove reset', this.__alloyId30);
    };
    // <dataFunctions>
    indexAbstract.prototype.__alloyId30 = function (e) {
        if (e && e.fromAdapter) {
            return;
        }
        // FIXME: set object on function, seriously ?!
        // https://jira.appcelerator.org/browse/ALOY-648
        var opts = this.__alloyId30.opts || {};
        var models = alloy_1.default.Collections['feed'].models;
        var len = models.length;
        var rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId2 = models[i];
            var __transform = __alloyId2.transform();
            var __alloyId4 = Ti.UI.createTableViewRow({ height: 200, });
            rows.push(__alloyId4);
            var __alloyId6 = Ti.UI.createLabel({ text: "first", left: 10, });
            __alloyId4.add(__alloyId6);
            var __alloyId18 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId18);
            var __alloyId20 = Ti.UI.createLabel({ text: "second", });
            __alloyId18.add(__alloyId20);
            var __alloyId22 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId22);
            var __alloyId24 = Ti.UI.createLabel({ text: "third", });
            __alloyId22.add(__alloyId24);
            var __alloyId26 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId26);
            var __alloyId28 = Ti.UI.createLabel({ text: "fourth", });
            __alloyId26.add(__alloyId28);
        }
        this["__alloyId1"].setData(rows);
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
