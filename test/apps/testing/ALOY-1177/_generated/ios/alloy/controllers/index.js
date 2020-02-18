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
  var __alloyId1 = [];$.__views["__alloyId4"] = Ti.UI.createView(
  { backgroundColor: "#a00", height: "50dp" });

  $.__views["__alloyId6"] = Ti.UI.createView(
  { backgroundColor: "#0a0", height: "50dp" });

  $.__views["__alloyId2"] = Ti.UI.createTableViewSection(
  { headerView: $.__views["__alloyId4"], footerView: $.__views["__alloyId6"] });

  __alloyId1.push($.__views["__alloyId2"]);$.__views["__alloyId7"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 1" });

  $.__views["__alloyId2"].add($.__views["__alloyId7"]);$.__views["__alloyId8"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 2" });

  $.__views["__alloyId2"].add($.__views["__alloyId8"]);$.__views["__alloyId9"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 3" });

  $.__views["__alloyId2"].add($.__views["__alloyId9"]);$.__views["__alloyId10"] = Ti.UI.createTableViewSection(
  { headerTitle: "Section 2" });

  __alloyId1.push($.__views["__alloyId10"]);$.__views["__alloyId11"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 1" });

  $.__views["__alloyId10"].add($.__views["__alloyId11"]);$.__views["__alloyId12"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 2" });

  $.__views["__alloyId10"].add($.__views["__alloyId12"]);$.__views["__alloyId13"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 3" });

  $.__views["__alloyId10"].add($.__views["__alloyId13"]);$.__views["__alloyId14"] = Ti.UI.createTableViewSection(
  { headerTitle: "Section 3" });

  __alloyId1.push($.__views["__alloyId14"]);$.__views["__alloyId15"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 1" });

  $.__views["__alloyId14"].add($.__views["__alloyId15"]);$.__views["__alloyId16"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 2" });

  $.__views["__alloyId14"].add($.__views["__alloyId16"]);$.__views["__alloyId17"] = Ti.UI.createTableViewRow(
  { height: "50dp", title: "Row 3" });

  $.__views["__alloyId14"].add($.__views["__alloyId17"]);$.__views["__alloyId0"] = Ti.UI.createTableView(
  { data: __alloyId1, filterAttribute: "title" });

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