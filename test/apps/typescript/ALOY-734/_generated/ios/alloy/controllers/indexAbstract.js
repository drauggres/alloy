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
        var __alloyId1 = [];
        var __alloyId5 = { image: "appc1.png", };
        __alloyId1.push(__alloyId5);
        var __alloyId6 = { image: "appc1.png", };
        __alloyId1.push(__alloyId6);
        var __alloyId7 = { image: "appc1.png", };
        __alloyId1.push(__alloyId7);
        var __alloyId8 = { image: "/appc1.png", };
        __alloyId1.push(__alloyId8);
        _this["coverflow"] = Ti.UI.iOS.createCoverFlowView({ images: __alloyId1, id: "coverflow", });
        _this["index"].add(_this["coverflow"]);
        var __alloyId10 = [];
        var __alloyId13 = { title: "button 1", };
        __alloyId10.push(__alloyId13);
        var __alloyId14 = { title: "button 2", };
        __alloyId10.push(__alloyId14);
        var __alloyId15 = { title: "hi there", };
        __alloyId10.push(__alloyId15);
        _this["buttonbar"] = Ti.UI.createButtonBar({ bottom: 10, left: 15, right: 15, labels: __alloyId10, id: "buttonbar", });
        _this["index"].add(_this["buttonbar"]);
        var __alloyId17 = [];
        var __alloyId20 = { title: "button 1", };
        __alloyId17.push(__alloyId20);
        var __alloyId21 = { title: "button 2", };
        __alloyId17.push(__alloyId21);
        var __alloyId22 = { title: "hi there", };
        __alloyId17.push(__alloyId22);
        _this["tabbedbar"] = Ti.UI.createTabbedBar({ top: 10, left: 15, right: 15, labels: __alloyId17, id: "tabbedbar", });
        _this["index"].add(_this["tabbedbar"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["coverflow"] = _this.coverflow;
        _this.__views["buttonbar"] = _this.buttonbar;
        _this.__views["tabbedbar"] = _this.tabbedbar;
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
