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
        _this.__alloyId4 = void 0;
        _this.info = void 0;
        _this.__alloyId2 = void 0;
        _this.__alloyId1 = void 0;
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
        if ((OS_ANDROID)) {
            _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, exitOnClose: true, id: "index", });
            _this["index"] && _this.addTopLevelView(_this["index"]);
            if ((OS_ANDROID)) {
                var __alloyId7_1 = function (e) {
                    e.source.removeEventListener('open', __alloyId7_1);
                    if (e.source.activity) {
                        e.source.activity.onCreateOptionsMenu = function (e) {
                            _this["__alloyId6"] = alloy_1.default.createWidget('alloy.button', 'widget', { title: "android", __parentSymbol: e.menu, });
                            _this["__alloyId6"] && _this["__alloyId6"].on('click', _this.doSave.bind(_this));
                        };
                    }
                    else {
                        Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                        Ti.API.warn('or other UI component which does not have an Android activity.');
                        Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
                    }
                };
                _this["index"].addEventListener('open', __alloyId7_1);
            }
            _this["info"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#000", textAlign: "center", font: { fontSize: "24dp", fontWeight: "bold", }, id: "info", });
            _this["index"].add(_this["info"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["info"] = _this.info;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId6"] = _this.__alloyId6;
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
