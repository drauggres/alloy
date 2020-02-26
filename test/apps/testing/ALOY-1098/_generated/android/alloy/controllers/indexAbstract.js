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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var alloy_1 = __importDefault(require("alloy"));
var _ = __importStar(require("underscore"));
var BaseController_1 = __importDefault(require("/controllers/BaseController"));
var indexAbstract = /** @class */ (function (_super) {
    __extends(indexAbstract, _super);
    function indexAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__alloyId12 = void 0;
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
        if ((OS_ANDROID)) {
            var __alloyId11_1 = function (e) {
                e.source.removeEventListener('open', __alloyId11_1);
                if (e.source.activity) {
                    e.source.activity.onCreateOptionsMenu = function (e) {
                        _this["__alloyId3"] = Ti.UI.createTextField({ hintText: "Use a SearchView", });
                        var __alloyId4 = { showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW, icon: Ti.Android.R.drawable.ic_menu_search, };
                        if (_this["__alloyId3"]) {
                            __alloyId4.actionView = _this["__alloyId3"];
                        }
                        if (e.menu) {
                            _this["__alloyId1"] = e.menu.add(_.pick(__alloyId4, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        if (_this["__alloyId1"]) {
                            _this["__alloyId1"].applyProperties(_.omit(__alloyId4, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        _this["__alloyId7"] = Ti.UI.createButton({ title: "Click", });
                        var __alloyId8 = { showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM, };
                        if (_this["__alloyId7"]) {
                            __alloyId8.actionView = _this["__alloyId7"];
                        }
                        if (e.menu) {
                            _this["__alloyId5"] = e.menu.add(_.pick(__alloyId8, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        if (_this["__alloyId5"]) {
                            _this["__alloyId5"].applyProperties(_.omit(__alloyId8, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        var __alloyId10 = { title: "Normal", };
                        if (false) {
                            __alloyId10.actionView = false;
                        }
                        if (e.menu) {
                            _this["__alloyId9"] = e.menu.add(_.pick(__alloyId10, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        if (_this["__alloyId9"]) {
                            _this["__alloyId9"].applyProperties(_.omit(__alloyId10, alloy_1.default.Android.menuItemCreateArgs));
                        }
                    };
                }
                else {
                    Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                    Ti.API.warn('or other UI component which does not have an Android activity.');
                    Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
                }
            };
            _this["index"].addEventListener('open', __alloyId11_1);
        }
        if ((OS_ANDROID)) {
            _this["__alloyId13"] = Ti.UI.createLabel({ color: "black", font: { fontSize: "14dp", }, text: "Tap search icon to expand ActionView", });
            _this["index"].add(_this["__alloyId13"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId12"] = _this.__alloyId12;
        _this.__views["__alloyId13"] = _this.__alloyId13;
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
