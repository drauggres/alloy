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
  if (Alloy.isTablet) {
    $.__views["__alloyId2"] = Ti.UI.createView(
    {});

    $.__views["__alloyId3"] = Ti.UI.createLabel(
    { font: { fontSize: "20dp", color: "black" }, text: 'HeaderView Tablet' });

    $.__views["__alloyId2"].add($.__views["__alloyId3"]);
  }
  if (!Alloy.isTablet) {
    $.__views["__alloyId5"] = Ti.UI.createView(
    {});

    $.__views["__alloyId6"] = Ti.UI.createLabel(
    { font: { fontSize: "20dp", color: "black" }, text: 'HeaderView Handheld' });

    $.__views["__alloyId5"].add($.__views["__alloyId6"]);
  }
  $.__views["__alloyId0"] = Ti.UI.createTableView(
  function () {
    var o = {};
    if (Alloy.isTablet) Alloy.deepExtend(true, o, { headerView: $.__views["__alloyId2"] });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { headerView: $.__views["__alloyId5"] });
    Alloy.deepExtend(true, o, { height: "80%" });
    return o;
  }());

  $.__views["index"].add($.__views["__alloyId0"]);
  if (Alloy.isTablet) {
    $.__views["__alloyId7"] = Ti.UI.createView(
    {});

    $.__views["index"].add($.__views["__alloyId7"]);
    $.__views["__alloyId8"] = Ti.UI.createLabel(
    { font: { fontSize: "20dp", color: "black" }, text: 'View Tablet' });

    $.__views["__alloyId7"].add($.__views["__alloyId8"]);
  }
  if (!Alloy.isTablet) {
    $.__views["__alloyId9"] = Ti.UI.createView(
    {});

    $.__views["index"].add($.__views["__alloyId9"]);
    $.__views["__alloyId10"] = Ti.UI.createLabel(
    { font: { fontSize: "20dp", color: "black" }, text: 'View Handheld' });

    $.__views["__alloyId9"].add($.__views["__alloyId10"]);
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