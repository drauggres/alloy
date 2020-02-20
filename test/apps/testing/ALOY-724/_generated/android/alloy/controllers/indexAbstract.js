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
        var __alloyId0 = [];
        _this["__alloyId2"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 1", });
        _this["__alloyId3"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 1', });
        _this["__alloyId2"].add(_this["__alloyId3"]);
        _this["__alloyId1"] = Ti.UI.createTab({ window: _this["__alloyId2"], title: "tab 1", });
        __alloyId0.push(_this["__alloyId1"]);
        _this["__alloyId5"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 2", });
        _this["__alloyId6"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 2', });
        _this["__alloyId5"].add(_this["__alloyId6"]);
        _this["__alloyId4"] = Ti.UI.createTab({ window: _this["__alloyId5"], title: "tab 2", });
        __alloyId0.push(_this["__alloyId4"]);
        _this["__alloyId8"] = Ti.UI.createWindow({ backgroundColor: "#fff", modal: false, title: "window 3", });
        _this["__alloyId9"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold", }, text: 'Label 3', });
        _this["__alloyId8"].add(_this["__alloyId9"]);
        _this["__alloyId7"] = Ti.UI.createTab({ window: _this["__alloyId8"], title: "tab 3", });
        __alloyId0.push(_this["__alloyId7"]);
        _this["index"] = Ti.UI.createTabGroup({ backgroundColor: "#fff", tabs: __alloyId0, id: "index", });
        var __alloyId15 = function (e) {
            e.source.removeEventListener('open', __alloyId15);
            if (e.source.activity) {
                e.source.activity.onCreateOptionsMenu = function (e) {
                    var __alloyId12 = { title: "help", icon: "/ic_menu_help.png", };
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
                    var __alloyId14 = { title: "home", icon: "/ic_menu_home.png", };
                    if (false) {
                        __alloyId14.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId13"] = e.menu.add(_.pick(__alloyId14, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId13"]) {
                        _this["__alloyId13"].applyProperties(_.omit(__alloyId14, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId13"] && _this.addListener(_this["__alloyId13"], 'click', _this.doClick.bind(_this));
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
        _this["index"] && _this.addListener(_this["index"], 'focus', _this.setCurrentTab.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId7"] = _this.__alloyId7;
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
