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
        var childView = Alloy.createController('childview');
        childView.updateViews({
            '#label': {
                text: 'I am a label',
                top: 50,
                width: Ti.UI.FILL,
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                ellipsize: false,
                backgroundGradient: {
                    type: 'linear',
                    startPoint: { x: '0%', y: '50%' },
                    endPoint: { x: '100%', y: '50%' },
                    colors: [{ color: 'red', offset: 0.0 }, { color: 'blue', offset: 0.25 }, { color: 'red', offset: 1.0 }],
                }
            },
            '#anotherlabel': {
                text: 'I am also a label',
                foo: 'bar'
            },
            '#someNonExistentId': { text: 'I do not exist' }
        });
        _this.index.add(childView.getView());
        var opts = {
            '#normallabel': {
                text: 'i used updateViews()',
                color: '#a00',
                font: {
                    fontWeight: 'bold',
                    fontSize: 24
                },
                bottom: 50
            }
        };
        // chain calls
        _this.index.add(Alloy.createController('normalchild').updateViews(opts).getView());
        _this.index.add(Alloy.createController('normalchild', {
            text: 'Set the old-fashioned way'
        }).getView());
        _this.index.open();
        return _this;
    }
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
