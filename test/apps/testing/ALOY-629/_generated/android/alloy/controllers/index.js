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
  { backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["notes"] = Ti.UI.createLabel(
  { top: 10, left: 15, right: 15, height: Ti.UI.SIZE, textAlign: "left", color: "#000", font: { fontSize: 14, fontWeight: "normal" }, text: 'Below you should see a red box with a rounded black border and white bold text inside. On iOS, it should say "global merging is working!" with a gray drop shadow. On all other platforms, it should say "you should only see this on non-iOS builds" with no drop shadow.', id: "notes" });

  $.__views["index"].add($.__views["notes"]);
  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: 24, fontWeight: "bold" }, bottom: 15, height: 120, width: 300, textAlign: "center", text: "you should only see this on non-iOS builds", backgroundColor: "#a00", borderWidth: 2, borderRadius: 8, borderColor: "#000" });

  $.__views["index"].add($.__views["__alloyId0"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;