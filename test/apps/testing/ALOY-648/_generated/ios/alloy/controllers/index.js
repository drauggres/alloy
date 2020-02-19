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
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        _this.TEXT = 'Click me to add more items';
        _this.info = Alloy.Collections.info;
        _this.ctr = 0;
        // Create a basic section
        _this.section.items = [{ properties: { title: _this.TEXT } }];
        // Animation options for ListView are only supported on iOS...
        if (OS_IOS) {
            // Add "opts" to the "dataFunction" function object. In this case, we'll be
            // adding "animation" options that will be used by the ListView's generated
            // data binding code to make sure our ListItems don't animate when
            // updated.
            // TODO: There's a Titanium bug where ListItems still animate when using
            //       the ListSection.setItems() function. When TIMOB-13737 is resolved,
            //       this will work as expected and the ListItems won't animate when
            //       they are added.
            _this.loadData.opts = {
                animation: {
                    animated: false
                }
            };
        }
        // Open the window
        _this.index.open();
        return _this;
    }
    // Add new ListItems when ever the button is clicked
    index.prototype.doClick = function (e) {
        if (e.sectionIndex === 0 && e.itemIndex === 0) {
            this.info.add({
                title: this.ctr++ === 0 ? this.TEXT : 'Row #' + this.ctr
            });
        }
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
