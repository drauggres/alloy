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

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
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


  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId0 = [];if (false || true) {
    $.__views["row1"] = Ti.UI.createTableViewRow(
    { font: { fontSize: "16dp" }, color: "black", id: "row1", title: "Row 1 - iOS and Android" });

    __alloyId0.push($.__views["row1"]);}
  if (true || false) {
    $.__views["row2"] = Ti.UI.createTableViewRow(
    { font: { fontSize: "16dp" }, color: "black", id: "row2", title: "Row 2 - Android and Mobileweb" });

    __alloyId0.push($.__views["row2"]);}
  $.__views["container"] = Ti.UI.createTableView(
  { data: __alloyId0, id: "container", top: 30 });

  $.__views["index"].add($.__views["container"]);
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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map