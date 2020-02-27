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
var Alloy = __importStar(require("alloy"));
var indexAbstract_1 = require("/controllers/indexAbstract");
var ctr = 0;
var classes = [
    [],
    ['big'],
    ['blue'],
    'shadow',
    ['shadow'],
    ['shadow', 'big'],
    ['big', 'shadow'],
    ['big', 'blue', 'shadow'],
    'big blue shadow'
];
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        _this.index.open();
        return _this;
    }
    index.prototype.addNewLabel = function (e) {
        var index = ctr % classes.length;
        // Alloy.createView() for creating new titanium view proxies with a
        // given set of style attributes to determine which styles should be
        // applied.
        var label = Alloy.UI.create(
        // the name of the controller from which to reference styles
        'index', 
        // The Titanium API to use for the creation. In this case we use "Label"
        // but the full "Ti.UI.Label" would work as well. Like in the XML,
        // implicit namespaces and defaults will be checked if an explicit
        // namespace is not given.
        'Label', 
        // The 2nd parameter is an object that holds style information, like id
        // and classes, as well as the typical parameters you would pass to a
        // Titanium proxy. This allows the creation and property application to
        // be done in a single command, making for the best runtime performance.
        {
            // style attributes
            classes: classes[index],
            id: 'newLabel' + (ctr + 1),
            // basic proxy properties that apply to Label
            text: 'this is label #' + (ctr + 1),
            touchEnabled: false
        });
        this.index.add(label);
        ctr++;
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
