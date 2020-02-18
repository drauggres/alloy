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
  $.__views["drawer"] = Ti.UI.Android.createDrawerLayout(
  { id: "drawer" });

  $.__views["index"].add($.__views["drawer"]);
  $.__views["__alloyId2"] = Ti.UI.createView(
  { backgroundColor: "red" });

  $.__views["drawer"].leftView = $.__views["__alloyId2"];$.__views["__alloyId4"] = Ti.UI.createView(
  { backgroundColor: "yellow" });

  $.__views["__alloyId5"] = Ti.UI.createButton(
  { title: 'RIGHT' });

  $.__views["__alloyId4"].add($.__views["__alloyId5"]);
  doButtonClick ? $.addListener($.__views["__alloyId5"], 'click', doButtonClick) : __defers['$.__views["__alloyId5"]!click!doButtonClick'] = true;$.__views["drawer"].centerView = $.__views["__alloyId4"];$.__views["__alloyId7"] = Ti.UI.createView(
  { backgroundColor: "orange" });

  $.__views["drawer"].rightView = $.__views["__alloyId7"];exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doButtonClick(e) {
    $.drawer.toggleRight();
  }

  function doHomeIcon(e) {
    $.drawer.toggleLeft();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId5"]!click!doButtonClick'] && $.addListener($.__views["__alloyId5"], 'click', doButtonClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;