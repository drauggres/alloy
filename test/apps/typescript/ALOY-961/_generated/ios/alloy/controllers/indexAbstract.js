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
        _this["index"] = Ti.UI.createWindow({ backgroundColor: "#fff", layout: "vertical", id: "index", });
        _this["index"] && _this.addTopLevelView(_this["index"]);
        _this["__alloyId1"] = Ti.UI.createAttributedString({ attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6,], },], text: 'Label - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.', });
        _this["__alloyId0"] = Ti.UI.createLabel({ top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: Ti.UI.SIZE, attributedString: _this["__alloyId1"], });
        _this["index"].add(_this["__alloyId0"]);
        _this["__alloyId3"] = Ti.UI.createAttributedString({ attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6,], },], text: 'TextField - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.', });
        _this["__alloyId4"] = Ti.UI.createAttributedString({ attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6,], },], text: 'TextField HintText - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.', });
        _this["__alloyId2"] = Ti.UI.createTextField({ top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: Ti.UI.SIZE, attributedString: _this["__alloyId3"], attributedHintText: _this["__alloyId4"], });
        _this["index"].add(_this["__alloyId2"]);
        _this["__alloyId6"] = Ti.UI.createAttributedString({ attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2,], }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107,], }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6,], },], text: 'TextArea - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.', });
        _this["__alloyId5"] = Ti.UI.createTextArea({ top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: 200, attributedString: _this["__alloyId6"], });
        _this["index"].add(_this["__alloyId5"]);
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["__alloyId1"] = _this.__alloyId1;
        _this.__views["__alloyId0"] = _this.__alloyId0;
        _this.__views["__alloyId3"] = _this.__alloyId3;
        _this.__views["__alloyId4"] = _this.__alloyId4;
        _this.__views["__alloyId2"] = _this.__alloyId2;
        _this.__views["__alloyId6"] = _this.__alloyId6;
        _this.__views["__alloyId5"] = _this.__alloyId5;
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
