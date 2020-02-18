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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createTextField(
  { top: "10dp", left: "15dp", right: "15dp", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "I clear on edit", clearOnEdit: true });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createTextField(
  { top: "10dp", left: "15dp", right: "15dp", height: "40dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "I don't clear on edit", clearOnEdit: false });

  $.__views["index"].add($.__views["__alloyId1"]);
  if (true) {
    $.__views["__alloyId2"] = Ti.UI.createTextArea(
    { top: "10dp", left: "15dp", right: "15dp", height: "70dp", borderRadius: 8, borderColor: "#888", borderWidth: 2, hintText: "I clear on edit", clearOnEdit: true });

    $.__views["index"].add($.__views["__alloyId2"]);
  }
  if (true) {
    $.__views["__alloyId3"] = Ti.UI.createTextArea(
    { top: "10dp", left: "15dp", right: "15dp", height: "70dp", borderRadius: 8, borderColor: "#888", borderWidth: 2, hintText: "I don't clear on edit", clearOnEdit: false });

    $.__views["index"].add($.__views["__alloyId3"]);
  }
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