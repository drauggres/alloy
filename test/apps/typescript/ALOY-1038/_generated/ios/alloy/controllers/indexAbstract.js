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
        _this.__alloyId1 = void 0;
        _this.__alloyId2 = void 0;
        _this.__alloyId4 = void 0;
        _this.__alloyId6 = void 0;
        _this.__alloyId9 = void 0;
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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["explain"] = Ti.UI.createLabel({ color: "blue", font: { fontSize: "10dp", fontStyle: "italic", }, top: 20, text: "You should see 6 labels above and 6 below the line", id: "explain", });
        _this["index"].add(_this["explain"]);
        if ((OS_IOS)) {
            _this["__alloyId0"] = Ti.UI.createLabel({ text: 'ios', });
            _this["index"].add(_this["__alloyId0"]);
        }
        if ((OS_IOS || OS_MOBILEWEB)) {
            _this["__alloyId3"] = Ti.UI.createLabel({ text: 'ios,mobileweb', });
            _this["index"].add(_this["__alloyId3"]);
        }
        if ((OS_IOS || OS_ANDROID)) {
            _this["__alloyId5"] = Ti.UI.createLabel({ text: 'ios,android', });
            _this["index"].add(_this["__alloyId5"]);
        }
        if ((OS_IOS || OS_MOBILEWEB || OS_WINDOWS)) {
            _this["__alloyId7"] = Ti.UI.createLabel({ text: '!android', });
            _this["index"].add(_this["__alloyId7"]);
        }
        if ((OS_ANDROID || OS_IOS || OS_WINDOWS)) {
            _this["__alloyId8"] = Ti.UI.createLabel({ text: '!mobileweb', });
            _this["index"].add(_this["__alloyId8"]);
        }
        if ((OS_MOBILEWEB || OS_IOS || OS_WINDOWS)) {
            _this["__alloyId10"] = Ti.UI.createLabel({ text: 'mobileweb,!android', });
            _this["index"].add(_this["__alloyId10"]);
        }
        _this["__alloyId11"] = Ti.UI.createView({ height: 1, width: Ti.UI.FILL, backgroundColor: "black", top: 10, });
        _this["index"].add(_this["__alloyId11"]);
        _this["ios"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: ios", id: "ios", });
        _this["index"].add(_this["ios"]);
        _this["android"] = Ti.UI.createLabel({ height: 0, id: "android", });
        _this["index"].add(_this["android"]);
        _this["mobileweb"] = Ti.UI.createLabel({ height: 0, id: "mobileweb", });
        _this["index"].add(_this["mobileweb"]);
        _this["iosmobileweb"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: ios,mobilweb", id: "iosmobileweb", });
        _this["index"].add(_this["iosmobileweb"]);
        _this["androidmobileweb"] = Ti.UI.createLabel({ height: 0, id: "androidmobileweb", });
        _this["index"].add(_this["androidmobileweb"]);
        _this["iosandroid"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: ios,android", id: "iosandroid", });
        _this["index"].add(_this["iosandroid"]);
        _this["notios"] = Ti.UI.createLabel({ height: 0, id: "notios", });
        _this["index"].add(_this["notios"]);
        _this["notandroid"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: !android", id: "notandroid", });
        _this["index"].add(_this["notandroid"]);
        _this["notmobileweb"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: !mobileweb", id: "notmobileweb", });
        _this["index"].add(_this["notmobileweb"]);
        _this["mobilewebNotios"] = Ti.UI.createLabel({ height: 0, id: "mobilewebNotios", });
        _this["index"].add(_this["mobilewebNotios"]);
        _this["mobilewebNotandroid"] = Ti.UI.createLabel({ height: Ti.UI.SIZE, text: "TSS: mobileweb,!android", id: "mobilewebNotandroid", });
        _this["index"].add(_this["mobilewebNotandroid"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["explain"] = _this.explain;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId5"] = _this.__alloyId5;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId7"] = _this.__alloyId7;
        _this.__views["__alloyId8"] = _this.__alloyId8;
        _this.__views["__alloyId9"] = _this.__alloyId9;
        _this.__views["__alloyId10"] = _this.__alloyId10;
        _this.__views["__alloyId11"] = _this.__alloyId11;
        _this.__views["ios"] = _this.ios;
        _this.__views["android"] = _this.android;
        _this.__views["mobileweb"] = _this.mobileweb;
        _this.__views["iosmobileweb"] = _this.iosmobileweb;
        _this.__views["androidmobileweb"] = _this.androidmobileweb;
        _this.__views["iosandroid"] = _this.iosandroid;
        _this.__views["notios"] = _this.notios;
        _this.__views["notandroid"] = _this.notandroid;
        _this.__views["notmobileweb"] = _this.notmobileweb;
        _this.__views["mobilewebNotios"] = _this.mobilewebNotios;
        _this.__views["mobilewebNotandroid"] = _this.mobilewebNotandroid;
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
