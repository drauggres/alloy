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
var emptyAbstract = /** @class */ (function (_super) {
    __extends(emptyAbstract, _super);
    function emptyAbstract(args) {
        var _this = _super.call(this) || this;
        _this.args = args;
        _this.__controllerPath = emptyAbstract.controllerPath;
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
        _this["empty"] = Ti.UI.createButton({ title: 'useless button', bottom: 50, id: "empty", });
        _this["empty"] && _this.addTopLevelView(_this["empty"]);
        _this["empty"] && _this.addListener(_this["empty"], 'click', _this.buttonClick.bind(_this));
        // </viewCode>
        // Populating $.__views for backward compatibility
        // <__views>
        _this.__views["empty"] = _this.empty;
        return _this;
        // </__view>
        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
        // </postcode>
    }
    emptyAbstract.prototype.destroy = function () {
    };
    emptyAbstract.controllerPath = 'empty';
    return emptyAbstract;
}(BaseController_1.default));
exports.emptyAbstract = emptyAbstract;
