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
        _this["win"] = Ti.UI.createWindow({ id: "win", });
        _this["win"] && _this.addTopLevelView(_this["win"]);
        var __alloyId9 = function (e) {
            e.source.removeEventListener('open', __alloyId9);
            if (e.source.activity) {
                e.source.activity.onCreateOptionsMenu = function (e) {
                    var __alloyId1 = { id: "item1", title: "Expand", showAsAction: Titanium.Android.SHOW_AS_ACTION_IF_ROOM, };
                    if (false) {
                        __alloyId1.actionView = false;
                    }
                    if (e.menu) {
                        _this["item1"] = e.menu.add(_.pick(__alloyId1, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["item1"]) {
                        _this["item1"].applyProperties(_.omit(__alloyId1, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["item1"] && _this.addListener(_this["item1"], 'click', _this.expand.bind(_this));
                    var __alloyId3 = { title: "Collapse", showAsAction: Titanium.Android.SHOW_AS_ACTION_IF_ROOM, };
                    if (false) {
                        __alloyId3.actionView = false;
                    }
                    if (e.menu) {
                        _this["__alloyId2"] = e.menu.add(_.pick(__alloyId3, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["__alloyId2"]) {
                        _this["__alloyId2"].applyProperties(_.omit(__alloyId3, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["__alloyId2"] && _this.addListener(_this["__alloyId2"], 'click', _this.collapse.bind(_this));
                    _this["__alloyId5"] = Ti.UI.createView({ layout: "horizontal", });
                    _this["__alloyId6"] = Ti.UI.createButton({ title: 'Search', left: 0, });
                    _this["__alloyId5"].add(_this["__alloyId6"]);
                    _this["__alloyId7"] = Ti.UI.createTextField({ right: 0, hintText: "Type Something", });
                    _this["__alloyId5"].add(_this["__alloyId7"]);
                    var __alloyId8 = { id: "item3", title: "Item 3", showAsAction: Titanium.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW, };
                    if (_this["__alloyId5"]) {
                        __alloyId8.actionView = _this["__alloyId5"];
                    }
                    if (e.menu) {
                        _this["item3"] = e.menu.add(_.pick(__alloyId8, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    if (_this["item3"]) {
                        _this["item3"].applyProperties(_.omit(__alloyId8, alloy_1.default.Android.menuItemCreateArgs));
                    }
                    _this["item3"] && _this.addListener(_this["item3"], 'expand', _this.report.bind(_this));
                    _this["item3"] && _this.addListener(_this["item3"], 'collapse', _this.report.bind(_this));
                };
            }
            else {
                Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
                Ti.API.warn('or other UI component which does not have an Android activity.');
                Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
            }
        };
        _this["win"].addEventListener('open', __alloyId9);
        _this["msg"] = Ti.UI.createLabel({ color: "white", text: "This example for Android only", id: "msg", });
        _this["win"].add(_this["msg"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["item1"] = _this.item1;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["item3"] = _this.item3;
        _this.__views["msg"] = _this.msg;
        _this.__views["win"] = _this.win;
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
