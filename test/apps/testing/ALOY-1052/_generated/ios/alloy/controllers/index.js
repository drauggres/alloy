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
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12 }, text: L('foo') });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12 }, text: "TabbedBar" });

  $.__views["index"].add($.__views["__alloyId1"]);
  if (true) {
    var __alloyId3 = [];var __alloyId7 = { title: "L(foo)" };
    __alloyId3.push(__alloyId7);var __alloyId8 = { title: L("foo") };
    __alloyId3.push(__alloyId8);var __alloyId9 = { title: L('foo') };
    __alloyId3.push(__alloyId9);$.__views["tb"] = Ti.UI.createTabbedBar(
    { labels: __alloyId3, id: "tb" });

    $.__views["index"].add($.__views["tb"]);
  }
  $.__views["__alloyId10"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, top: "25dp", color: "#000", font: { fontSize: 12 }, text: "ButtonBar" });

  $.__views["index"].add($.__views["__alloyId10"]);
  if (true) {
    var __alloyId12 = [];var __alloyId16 = { title: "L(foo)" };
    __alloyId12.push(__alloyId16);var __alloyId17 = { title: L('foo') };
    __alloyId12.push(__alloyId17);var __alloyId18 = { title: L('foo') };
    __alloyId12.push(__alloyId18);$.__views["bb"] = Ti.UI.createButtonBar(
    { labels: __alloyId12, id: "bb" });

    $.__views["index"].add($.__views["bb"]);
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