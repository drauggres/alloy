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
        _this.btnFoo = void 0;
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
        if ((OS_IOS)) {
            _this["__alloyId0"] = Ti.UI.createWindow({ title: "Modal", });
            if ((OS_IOS)) {
                _this["btnFoo"] = Ti.UI.createButton({ id: "btnFoo", title: "Show Contacts (ios)", });
                _this["__alloyId0"].add(_this["btnFoo"]);
                _this["btnFoo"] && _this.addListener(_this["btnFoo"], 'click', _this.showContacts.bind(_this));
            }
            _this["welcomeNav"] = Ti.UI.createNavigationWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, window: _this["__alloyId0"], id: "welcomeNav", });
            _this["welcomeNav"] && _this.addTopLevelView(_this["welcomeNav"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["btnFoo"] = _this.btnFoo;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["welcomeNav"] = _this.welcomeNav;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        if ((OS_IOS) && (OS_IOS)) {
        }
        return _this;
        // </postcode>
    }
    indexAbstract.prototype.destroy = function () {
    };
    indexAbstract.controllerPath = 'index';
    return indexAbstract;
}(BaseController_1.default));
exports.indexAbstract = indexAbstract;
