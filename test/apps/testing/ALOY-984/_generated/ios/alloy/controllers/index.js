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
  if (true) {
    $.__views["__alloyId0"] = Ti.UI.createWindow(
    { title: "NavButtons" });

    var leftNavButtons = [];$.__views["__alloyId2"] = Ti.UI.createView(
    { width: 25, height: 25, backgroundColor: "red" });

    leftNavButtons.push($.__views["__alloyId2"]);$.__views["__alloyId3"] = Ti.UI.createView(
    { width: 25, height: 25, backgroundColor: "green" });

    leftNavButtons.push($.__views["__alloyId3"]);$.__views["__alloyId4"] = Ti.UI.createView(
    { width: 25, height: 25, backgroundColor: "blue" });

    leftNavButtons.push($.__views["__alloyId4"]);$.__views["__alloyId0"].leftNavButtons = leftNavButtons;var rightNavButtons = [];$.__views["__alloyId6"] = Ti.UI.createButton(
    { title: "B1" });

    rightNavButtons.push($.__views["__alloyId6"]);$.__views["__alloyId7"] = Ti.UI.createButton(
    { title: "B2" });

    rightNavButtons.push($.__views["__alloyId7"]);$.__views["__alloyId8"] = Ti.UI.createButton(
    { title: "B3" });

    rightNavButtons.push($.__views["__alloyId8"]);$.__views["__alloyId0"].rightNavButtons = rightNavButtons;$.__views["__alloyId9"] = Ti.UI.createLabel(
    { text: "The window should have three colored views on the left, and three buttons on the right, of the NavigationBar." });

    $.__views["__alloyId0"].add($.__views["__alloyId9"]);
    $.__views["index"] = Ti.UI.createNavigationWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, window: $.__views["__alloyId0"], id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
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