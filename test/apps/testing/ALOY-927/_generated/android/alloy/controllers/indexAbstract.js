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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, title: "Keyboard Types", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["scrolly"] = Ti.UI.createScrollView({ layout: "vertical", id: "scrolly", });
        _this["index"].add(_this["scrolly"]);
        _this["normal"] = Ti.UI.createTextField({ top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, keyboardType: Ti.UI.KEYBOARD_DEFAULT, returnKeyType: Ti.UI.RETURNKEY_DEFAULT, autocorrect: true, autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS, hintText: "default", id: "normal", });
        _this["scrolly"].add(_this["normal"]);
        _this["numeric"] = Ti.UI.createTextField({ top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "numbers_punctuation / done", id: "numeric", keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, returnKeyType: Ti.UI.RETURNKEY_DONE, });
        _this["scrolly"].add(_this["numeric"]);
        _this["web"] = Ti.UI.createTextField({ top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "url / go", id: "web", keyboardType: Ti.UI.KEYBOARD_URL, returnKeyType: Ti.UI.RETURNKEY_GO, });
        _this["scrolly"].add(_this["web"]);
        _this["password"] = Ti.UI.createTextField({ top: 40, width: "85%", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, keyboardType: Ti.UI.KEYBOARD_DEFAULT, hintText: "password", passwordMask: true, autocorrect: false, autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE, id: "password", });
        _this["scrolly"].add(_this["password"]);
        _this["textarea"] = Ti.UI.createTextArea({ top: 40, width: "85%", height: "40dp", borderWidth: 1, borderColor: "#999", keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION, returnKeyType: Ti.UI.RETURNKEY_SEND, id: "textarea", autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL, });
        _this["scrolly"].add(_this["textarea"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["normal"] = _this.normal;
        _this.__views["numeric"] = _this.numeric;
        _this.__views["web"] = _this.web;
        _this.__views["password"] = _this.password;
        _this.__views["textarea"] = _this.textarea;
        _this.__views["scrolly"] = _this.scrolly;
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
