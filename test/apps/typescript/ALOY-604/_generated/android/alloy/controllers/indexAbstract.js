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
        alloy_1.default.Collections['data'].on('fetch destroy change add remove reset', _this.__alloyId9.bind(_this));
        // </precode>
        // Generated UI code
        // <viewCode>
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#efefef", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId0"] = Ti.UI.createTableView({});
        _this["index"].add(_this["__alloyId0"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
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
        alloy_1.default.Collections['data'] && alloy_1.default.Collections['data'].off('fetch destroy change add remove reset', this.__alloyId9);
    };
    // <dataFunctions>
    indexAbstract.prototype.__alloyId9 = function (e) {
        if (e && e.fromAdapter) {
            return;
        }
        // FIXME: set object on function, seriously ?!
        // https://jira.appcelerator.org/browse/ALOY-648
        var opts = this.__alloyId9.opts || {};
        var models = alloy_1.default.Collections['data'].models;
        var len = models.length;
        var rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId1 = models[i];
            var __transform = typeof __alloyId1.transform === "function" ? __alloyId1.transform() : __alloyId1.toJSON();
            var __alloyId3 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId3);
            var __alloyId5 = Ti.UI.createView({ backgroundColor: "#efefef", height: "60dp", });
            __alloyId3.add(__alloyId5);
            __alloyId5 && this.addListener(__alloyId5, 'click', this.test.bind(this));
            var __alloyId7 = Ti.UI.createLabel({ left: "100dp", right: "10dp", height: Ti.UI.SIZE, textAlign: "left", color: "#181818", font: { fontSize: "32dp", fontWeight: "bold", }, touchEnabled: false, text: "Location", });
            __alloyId5.add(__alloyId7);
        }
        this["__alloyId0"].setData(rows);
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
