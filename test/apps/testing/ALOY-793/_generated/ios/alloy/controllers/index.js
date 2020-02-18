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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", top: 30, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "14dp" }, left: 30, top: 50, text: 'In TSS' });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["topLabel0"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: "no  slash", id: "topLabel0" });

  $.__views["index"].add($.__views["topLabel0"]);
  $.__views["topLabel1"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: "one \ slash, ignored", id: "topLabel1" });

  $.__views["index"].add($.__views["topLabel1"]);
  $.__views["topLabel2"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: "two \\ slashes, should see 1 slash", id: "topLabel2" });

  $.__views["index"].add($.__views["topLabel2"]);
  $.__views["topLabel3"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: "look here ❤", id: "topLabel3" });

  $.__views["index"].add($.__views["topLabel3"]);
  $.__views["__alloyId1"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "14dp" }, left: 30, top: 50, text: 'In XML' });

  $.__views["index"].add($.__views["__alloyId1"]);
  $.__views["__alloyId2"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: 'NO SLASH' });

  $.__views["index"].add($.__views["__alloyId2"]);
  $.__views["__alloyId3"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: 'ONE \ SLASH, IGNORED' });

  $.__views["index"].add($.__views["__alloyId3"]);
  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: 'TWO \\ SLASHES, 1 SLASH APPEARS' });

  $.__views["index"].add($.__views["__alloyId4"]);
  $.__views["__alloyId5"] = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.SIZE, color: "#000", textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, font: { fontSize: "12dp" }, left: 30, text: 'LOOK HERE \u2764' });

  $.__views["index"].add($.__views["__alloyId5"]);
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