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
Object.defineProperty(exports, "__esModule", { value: true });
var indexAbstract_1 = require("/controllers/indexAbstract");
var htmlText = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '	<head>\n' +
    '		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '	</head>\n' +
    '	<body>\n' +
    '		<p>WebView "onlink" Test</p>\n' +
    '		<br/>\n' +
    '		<br/>\n' +
    '		<a href="mylink://show/alert">Show Alert</a>\n' +
    '	</body>\n' +
    '</html>\n';
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super.call(this) || this;
        _this.webview.html = htmlText;
        _this.index.open();
        return _this;
    }
    index.prototype.onLinkHandler = function (e) {
        if (e.url === 'mylink://show/alert') {
            alert("The 'onLinkHandler' callback was invoked.");
            return false;
        }
        return true;
    };
    return index;
}(indexAbstract_1.indexAbstract));
exports.default = index;
