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
var alloy_1 = __importDefault(require("alloy"));
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
        _this["index"] = Ti.UI.createWindow({ layout: "vertical", backgroundColor: "white", top: 20, id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["title1"] = Ti.UI.createLabel((function () {
            var o = {};
            alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
            alloy_1.default.deepExtend(true, o, { color: "blue", });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Overriding platform with custom TSS", });
            alloy_1.default.deepExtend(true, o, { id: "title1", });
            return o;
        })());
        _this["index"].add(_this["title1"]);
        _this["title2"] = Ti.UI.createLabel((function () {
            var o = {};
            alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
            alloy_1.default.deepExtend(true, o, { color: "blue", });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Platform: Android, Alloy.Globals.someProperty==true", });
            alloy_1.default.deepExtend(true, o, { id: "title2", });
            return o;
        })());
        _this["index"].add(_this["title2"]);
        _this["title3"] = Ti.UI.createLabel((function () {
            var o = {};
            alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
            alloy_1.default.deepExtend(true, o, { color: "blue", text: "You should see this for label 3", id: "title3", });
            return o;
        })());
        _this["index"].add(_this["title3"]);
        _this["title4"] = Ti.UI.createLabel((function () {
            var o = {};
            alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
            if ((alloy_1.default.Globals.someProperty))
                alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
            alloy_1.default.deepExtend(true, o, { id: "title4", });
            return o;
        })());
        _this["index"].add(_this["title4"]);
        if (alloy_1.default.Globals.someProperty) {
            _this["title5"] = Ti.UI.createLabel((function () {
                var o = {};
                alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
                if ((alloy_1.default.Globals.someProperty))
                    alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
                alloy_1.default.deepExtend(true, o, { color: "blue", id: "title5", });
                return o;
            })());
            _this["index"].add(_this["title5"]);
        }
        if ((OS_ANDROID) && (alloy_1.default.Globals.someProperty)) {
            _this["title6"] = Ti.UI.createLabel((function () {
                var o = {};
                alloy_1.default.deepExtend(true, o, { top: 10, text: "Default label text", font: { fontSize: "14dp", }, });
                if ((alloy_1.default.Globals.someProperty))
                    alloy_1.default.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true", });
                alloy_1.default.deepExtend(true, o, { color: "blue", id: "title6", });
                return o;
            })());
            _this["index"].add(_this["title6"]);
        }
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["title1"] = _this.title1;
        _this.__views["title2"] = _this.title2;
        _this.__views["title3"] = _this.title3;
        _this.__views["title4"] = _this.title4;
        _this.__views["title5"] = _this.title5;
        _this.__views["title6"] = _this.title6;
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
