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
var ti_map_1 = __importDefault(require("ti.map"));
var empty_1 = __importDefault(require("/controllers/empty"));
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        // TODO: replace with normal instantiation:
        // public anotherModel: emptyModel = new emptyModel();
        _this.anotherModel = alloy_1.default.createModel('empty');
        _this.__controllerPath = indexAbstract.controllerPath;
        _this.__parentSymbol = args && args['__parentSymbol'] ? args['__parentSymbol'] : null;
        _this.$model = args && args['$model'] ? args['$model'] : null;
        _this.__itemTemplate = args && args['__itemTemplate'] ? args['__itemTemplate'] : null;
        // Generated code that must be executed before all UI and/or
        // controller code. One example is all model and collection
        // declarations from markup.
        // <precode>
        alloy_1.default.Collections.instance('empty');
        alloy_1.default.Models.instance('empty');
        // </precode>
        // Generated UI code
        // <viewCode>
        alloy_1.default.Collections.empty && alloy_1.default.Collections.empty.on('change', _this.collectionChange.bind(_this));
        alloy_1.default.Models.empty && alloy_1.default.Models.empty.on('change', _this.modelChange.bind(_this));
        _this.anotherModel && _this.anotherModel.on('change', _this.anotherModelChange.bind(_this));
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["index"] && _this.addListener(_this["index"], 'click', _this.windowClick.bind(_this));
        _this["map2"] = ti_map_1.default.createView({ id: "map2", });
        _this["index"].add(_this["map2"]);
        _this["map2"] && _this.addListener(_this["map2"], 'click', _this.mapClick.bind(_this));
        _this["__alloyId4"] = new empty_1.default({ __parentSymbol: _this["index"], });
        _this["__alloyId4"].setParent(_this["index"]);
        _this["__alloyId4"] && _this["__alloyId4"].on('init', _this.emptyInit.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["map2"] = _this.map2;
        _this.__views["__alloyId4"] = _this.__alloyId4;
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
