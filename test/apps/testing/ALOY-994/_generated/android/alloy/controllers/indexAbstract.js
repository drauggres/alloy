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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#000", modal: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        var __alloyId2 = function () {
            _this["index"].removeEventListener('open', __alloyId2);
            if (_this["index"].activity) {
                _this["index"].activity.actionBar.title = "My App Title";
                _this["index"].activity.actionBar.subtitle = "App subtitle";
                _this["index"].activity.actionBar.backgroundImage = "/actionbackground.png";
                _this["index"].activity.actionBar.icon = "/actionicon.png";
            }
            else {
                Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
                Ti.API.warn('UI component which does not have an Android activity. Android Activities');
                Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
            }
        };
        _this["index"].addEventListener('open', __alloyId2);
        var __alloyId8 = function (e) {
            e.source.removeEventListener('open', __alloyId8);
            if (e.source.activity) {
                e.source.activity.onCreateOptionsMenu = function (e) {
                    var __alloyId5 = { title: "option 1", icon: "/ic_menu_help.png", };
                    if (false) {
                        __alloyId5.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId4"] = e.menu.add(_.pick(__alloyId5, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId4"]) {
                        _this["__alloyId4"].applyProperties(_.omit(__alloyId5, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId4"] && _this.addListener(_this["__alloyId4"], 'click', _this.doClick.bind(_this));
                    var __alloyId7 = { title: "option 2", icon: "/ic_menu_home.png", };
                    if (false) {
                        __alloyId7.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId6"] = e.menu.add(_.pick(__alloyId7, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId6"]) {
                        _this["__alloyId6"].applyProperties(_.omit(__alloyId7, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId6"] && _this.addListener(_this["__alloyId6"], 'click', _this.openWin2.bind(_this));
                    _this["index"].activity.actionBar.title = "Title from menu";
                };
            }
            else {
                Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                Ti.API.warn('or other UI component which does not have an Android activity.');
                Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
            }
        };
        _this["index"].addEventListener('open', __alloyId8);
        _this["__alloyId9"] = Ti.UI.createLabel({ color: "#fff", font: { fontSize: "18dp", fontWeight: "bold", }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Window 1', });
        _this["index"].add(_this["__alloyId9"]);
        _this["__alloyId10"] = Ti.UI.createLabel({ color: "#fff", font: { fontSize: "18dp", fontWeight: "bold", }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Press the menu button', bottom: "20dp", });
        _this["index"].add(_this["__alloyId10"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        // this.__views["__alloyId1"] = this.__alloyId1;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId10"] = _this.__alloyId10;
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
