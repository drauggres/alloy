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
        _this["index"] = Ti.UI.createWindow({ title: "ALOY-991", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        if ((OS_ANDROID)) {
            var __alloyId2_1 = function (e) {
                e.source.removeEventListener('open', __alloyId2_1);
                if (e.source.activity) {
                    e.source.activity.onCreateOptionsMenu = function (e) {
                        var __alloyId0 = { showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, title: "One", id: "item1", };
                        if (false) {
                            __alloyId0.actionView = false;
                        }
                        if (e.menu) {
                            _this["item1"] = e.menu.add(_.pick(__alloyId0, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        if (_this["item1"]) {
                            _this["item1"].applyProperties(_.omit(__alloyId0, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        _this["item1"] && _this.addListener(_this["item1"], 'click', _this.doMenuClick.bind(_this));
                        var __alloyId1 = { showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, title: "Two", icon: Ti.Android.R.drawable.ic_menu_share, id: "item2", };
                        if (false) {
                            __alloyId1.actionView = false;
                        }
                        if (e.menu) {
                            _this["item2"] = e.menu.add(_.pick(__alloyId1, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        if (_this["item2"]) {
                            _this["item2"].applyProperties(_.omit(__alloyId1, alloy_1.default.Android.menuItemCreateArgs));
                        }
                        _this["item2"] && _this.addListener(_this["item2"], 'click', _this.doMenuClick.bind(_this));
                        _this["index"].activity.actionBar.title = "Menu Title";
                        _this["index"].activity.actionBar.subtitle = "menu subtitle";
                        _this["index"].activity.actionBar.displayHomeAsUp = true;
                    };
                }
                else {
                    Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                    Ti.API.warn('or other UI component which does not have an Android activity.');
                    Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
                }
            };
            _this["index"].addEventListener('open', __alloyId2_1);
        }
        _this["label"] = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", text: 'Hello! Click Me!', id: "label", });
        _this["index"].add(_this["label"]);
        _this["label"] && _this.addListener(_this["label"], 'click', _this.doClick.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["item1"] = _this.item1;
        _this.__views["item2"] = _this.item2;
        _this.__views["label"] = _this.label;
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
