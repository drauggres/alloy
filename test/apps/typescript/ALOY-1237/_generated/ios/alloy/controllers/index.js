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
var indexAbstract_1 = require("/controllers/indexAbstract");
var _ = __importStar(require("underscore"));
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        // Once event fire, you do not fire again.
        // All events to this window have been removed.
        _this.doWindowClick = function () {
            _this.removeListener(_this.index);
            console.log('Removed the all events on this window');
        };
        _this.index.open();
        return _this;
    }
    index.prototype.doOpen = function () {
        var _this = this;
        var button = Ti.UI.createButton({
            right: 10,
            bottom: 10,
            left: 10,
            title: 'button'
        });
        this.index.add(button);
        this.addListener(button, 'click', function (e) {
            // __trackId testing dummy event
            e.cancelBubble = true;
        });
        // manually add event
        this.addListener(this.index, 'click', this.doWindowClick);
        this.addListener(this.index, 'click', function () {
            _.each(_this.getListener(_this.index), function (listener) {
                if (listener.type === 'click' &&
                    listener.handler !== _this.doWindowClick) {
                    console.log('This is anonymous callback function');
                    console.log(listener);
                }
            });
        });
        console.log('Showing the all events in this controller');
        console.log(this.getListener());
    };
    // Once event fire, you do not fire again.
    // All events was nothing in this controller.
    index.prototype.doClick = function () {
        this.removeListener();
        console.log('Removed the all events in this controller');
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
