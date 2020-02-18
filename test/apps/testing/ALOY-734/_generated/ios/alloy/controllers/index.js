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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId1 = [];var __alloyId5 = { image: "appc1.png" };
  __alloyId1.push(__alloyId5);var __alloyId6 = { image: "appc1.png" };
  __alloyId1.push(__alloyId6);var __alloyId7 = { image: "appc1.png" };
  __alloyId1.push(__alloyId7);var __alloyId8 = { image: "/appc1.png" };
  __alloyId1.push(__alloyId8);$.__views["coverflow"] = Ti.UI.iOS.createCoverFlowView(
  { images: __alloyId1, id: "coverflow" });

  $.__views["index"].add($.__views["coverflow"]);
  var __alloyId10 = [];var __alloyId13 = { title: "button 1" };
  __alloyId10.push(__alloyId13);var __alloyId14 = { title: "button 2" };
  __alloyId10.push(__alloyId14);var __alloyId15 = { title: "hi there" };
  __alloyId10.push(__alloyId15);$.__views["buttonbar"] = Ti.UI.createButtonBar(
  { bottom: 10, left: 15, right: 15, labels: __alloyId10, id: "buttonbar" });

  $.__views["index"].add($.__views["buttonbar"]);
  var __alloyId17 = [];var __alloyId20 = { title: "button 1" };
  __alloyId17.push(__alloyId20);var __alloyId21 = { title: "button 2" };
  __alloyId17.push(__alloyId21);var __alloyId22 = { title: "hi there" };
  __alloyId17.push(__alloyId22);$.__views["tabbedbar"] = Ti.UI.createTabbedBar(
  { top: 10, left: 15, right: 15, labels: __alloyId17, id: "tabbedbar" });

  $.__views["index"].add($.__views["tabbedbar"]);
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