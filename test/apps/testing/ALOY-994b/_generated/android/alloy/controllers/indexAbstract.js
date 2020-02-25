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
        var __alloyId1 = [];
        _this["__alloyId3"] = Ti.UI.createWindow({ backgroundColor: "#000", title: "Win 1", });
        _this["__alloyId4"] = Ti.UI.createLabel({ color: "#fff", font: { fontSize: "18dp", fontWeight: "bold", }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: "I am Window 1", });
        _this["__alloyId3"].add(_this["__alloyId4"]);
        _this["__alloyId2"] = Ti.UI.createTab({ window: _this["__alloyId3"], title: "Tab 1", });
        __alloyId1.push(_this["__alloyId2"]);
        _this["__alloyId6"] = Ti.UI.createWindow({ backgroundColor: "#000", title: "Win 2", });
        _this["__alloyId7"] = Ti.UI.createLabel({ color: "#fff", font: { fontSize: "18dp", fontWeight: "bold", }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: "I am Window 2", });
        _this["__alloyId6"].add(_this["__alloyId7"]);
        _this["__alloyId5"] = Ti.UI.createTab({ window: _this["__alloyId6"], title: "Tab 2", });
        __alloyId1.push(_this["__alloyId5"]);
        _this["index"] = Ti.UI.createTabGroup({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, tabs: __alloyId1, id: "index", });
        var __alloyId9 = function () {
            _this["index"].removeEventListener('open', __alloyId9);
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
        _this["index"].addEventListener('open', __alloyId9);
        var __alloyId15 = function (e) {
            e.source.removeEventListener('open', __alloyId15);
            if (e.source.activity) {
                e.source.activity.onCreateOptionsMenu = function (e) {
                    var __alloyId12 = { title: "Show alert", };
                    if (false) {
                        __alloyId12.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId11"] = e.menu.add(_.pick(__alloyId12, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId11"]) {
                        _this["__alloyId11"].applyProperties(_.omit(__alloyId12, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId11"] && _this.addListener(_this["__alloyId11"], 'click', _this.doClick.bind(_this));
                    var __alloyId14 = { title: "Open Win2", };
                    if (false) {
                        __alloyId14.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId13"] = e.menu.add(_.pick(__alloyId14, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId13"]) {
                        _this["__alloyId13"].applyProperties(_.omit(__alloyId14, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId13"] && _this.addListener(_this["__alloyId13"], 'click', _this.openWin2.bind(_this));
                    _this["index"].activity.actionBar.title = "Title from menu";
                };
            }
            else {
                Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                Ti.API.warn('or other UI component which does not have an Android activity.');
                Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
            }
        };
        _this["index"].addEventListener('open', __alloyId15);
        _this["index"] && _this.addTopLevelView(_this["index"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        // this.__views["__alloyId8"] = this.__alloyId8;
        _this.__views["__alloyId11"] = _this.__alloyId11;
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
