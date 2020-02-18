var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#efefef", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  try {$.addListener($.__views["index"], 'touchstart', touch.start);} catch (e) {__defers['$.__views["index"]!touchstart!touch.start'] = true;}try {$.addListener($.__views["index"], 'touchend', touch['end'].func);} catch (e) {__defers['$.__views["index"]!touchend!touch[\'end\'].func'] = true;}doSwipe ? $.addListener($.__views["index"], 'swipe', doSwipe) : __defers['$.__views["index"]!swipe!doSwipe'] = true;$.__views["label"] = Ti.UI.createLabel(
  { touchEnabled: false, color: "#000", height: Ti.UI.SIZE, width: Ti.UI.SIZE, font: { fontSize: "24dp", fontWeight: "bold" }, text: 'touch and swipe', id: "label" });

  $.__views["index"].add($.__views["label"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var touch = {
    start: function (e) {
      Ti.API.info('touchstart');
    },
    end: {
      func: function (e) {
        Ti.API.info('touchend');
      } } };



  function doSwipe(e) {
    Ti.API.info('swipe: ' + e.direction);
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!touchstart!touch.start'] && $.addListener($.__views["index"], 'touchstart', touch.start);__defers['$.__views["index"]!touchend!touch[\'end\'].func'] && $.addListener($.__views["index"], 'touchend', touch['end'].func);__defers['$.__views["index"]!swipe!doSwipe'] && $.addListener($.__views["index"], 'swipe', doSwipe);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;