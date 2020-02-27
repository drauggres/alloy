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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Backbone = __importStar(require("backbone"));
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(attributes, options) {
        return _super.call(this, attributes, options) || this;
    }
    BaseModel.prototype.get = function (attributeName) {
        return _super.prototype.get.call(this, attributeName);
    };
    BaseModel.prototype.set = function (first, second, third) {
        return _super.prototype.set.call(this, first, second, third);
    };
    BaseModel.prototype.transform = function () {
        return this.toJSON();
    };
    BaseModel.prototype.toJSON = function (options) {
        return _super.prototype.toJSON.call(this);
    };
    return BaseModel;
}(Backbone.Model));
exports.BaseModel = BaseModel;
var BaseCollection = /** @class */ (function (_super) {
    __extends(BaseCollection, _super);
    function BaseCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseCollection;
}(Backbone.Collection));
exports.BaseCollection = BaseCollection;
