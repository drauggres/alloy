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
  if (true) {
    var __alloyId2 = [];$.__views["__alloyId3"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FIXED_SPACE });__alloyId2.push($.__views["__alloyId3"]);$.__views["__alloyId4"] = Ti.UI.createButton(
    { systemButton: Titanium.UI.iPhone.SystemButton.EDIT });

    __alloyId2.push($.__views["__alloyId4"]);$.__views["__alloyId5"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FIXED_SPACE });__alloyId2.push($.__views["__alloyId5"]);$.__views["__alloyId6"] = Ti.UI.createButton(
    { systemButton: Titanium.UI.iPhone.SystemButton.ADD });

    __alloyId2.push($.__views["__alloyId6"]);$.__views["__alloyId7"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FIXED_SPACE, width: '100' });__alloyId2.push($.__views["__alloyId7"]);$.__views["__alloyId8"] = Ti.UI.createButton(
    { systemButton: Titanium.UI.iPhone.SystemButton.DONE });

    __alloyId2.push($.__views["__alloyId8"]);$.__views["__alloyId0"] = Ti.UI.createToolbar(
    { items: __alloyId2 });

    $.__views["index"].add($.__views["__alloyId0"]);
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