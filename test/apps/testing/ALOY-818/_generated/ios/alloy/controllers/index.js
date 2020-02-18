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
  if (Alloy.isTablet) {
    $.__views["__alloyId1"] = Ti.UI.createWindow(
    { title: "Main Window" });

    $.__views["__alloyId2"] = Ti.UI.createLabel(
    { text: 'I am the master view' });

    $.__views["__alloyId1"].add($.__views["__alloyId2"]);
    $.__views["__alloyId0"] = Ti.UI.createNavigationWindow(
    { window: $.__views["__alloyId1"] });

    $.__views["__alloyId4"] = Ti.UI.createWindow(
    { title: "Detail Window" });

    $.__views["__alloyId5"] = Ti.UI.createLabel(
    { text: 'I am the detail view.' });

    $.__views["__alloyId4"].add($.__views["__alloyId5"]);
    $.__views["__alloyId3"] = Ti.UI.createNavigationWindow(
    { window: $.__views["__alloyId4"] });

    $.__views["index"] = Ti.UI.iOS.createSplitWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, masterView: $.__views["__alloyId0"], detailView: $.__views["__alloyId3"], id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
  }
  if (!Alloy.isTablet) {
    $.__views["index"] = Ti.UI.createWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
    $.__views["__alloyId6"] = Ti.UI.createLabel(
    { text: 'This app is only supported on iPad' });

    $.__views["index"].add($.__views["__alloyId6"]);
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