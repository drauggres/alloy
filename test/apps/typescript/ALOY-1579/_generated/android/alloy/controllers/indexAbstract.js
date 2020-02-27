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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        if ((OS_ANDROID)) {
            var __alloyId1_1 = function () {
                _this["index"].removeEventListener('open', __alloyId1_1);
                if (_this["index"].activity) {
                    _this["index"].activity.actionBar.displayHomeAsUp = true;
                    _this["index"].activity.actionBar.onHomeIconItemSelected = _this.doHomeIcon.bind(_this);
                }
                else {
                    Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
                    Ti.API.warn('UI component which does not have an Android activity. Android Activities');
                    Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
                }
            };
            _this["index"].addEventListener('open', __alloyId1_1);
        }
        _this["drawer"] = Ti.UI.Android.createDrawerLayout({ id: "drawer", });
        _this["index"].add(_this["drawer"]);
        _this["__alloyId3"] = Ti.UI.createView({ backgroundColor: "red", });
        _this["drawer"].leftView = _this["__alloyId3"];
        _this["__alloyId5"] = Ti.UI.createView({ backgroundColor: "yellow", });
        _this["__alloyId6"] = Ti.UI.createButton({ title: 'RIGHT', });
        _this["__alloyId5"].add(_this["__alloyId6"]);
        _this["__alloyId6"] && _this.addListener(_this["__alloyId6"], 'click', _this.doButtonClick.bind(_this));
        _this["drawer"].centerView = _this["__alloyId5"];
        _this["__alloyId8"] = Ti.UI.createView({ backgroundColor: "orange", });
        _this["drawer"].rightView = _this["__alloyId8"];
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        // this.__views["__alloyId0"] = this.__alloyId0;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["drawer"] = _this.drawer;
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
