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
  var __alloyId1 = [];$.__views["__alloyId3"] = Ti.UI.createWindow(
  { title: "Tab 2", id: "__alloyId3" });

  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { color: "#000", text: 'I am Window 2', id: "__alloyId4" });

  $.__views["__alloyId3"].add($.__views["__alloyId4"]);
  $.__views["__alloyId2"] = Ti.UI.createTab(
  { window: $.__views["__alloyId3"], title: "Tab 2", icon: "KS_nav_views.png", id: "__alloyId2" });

  __alloyId1.push($.__views["__alloyId2"]);$.__views["index"] = Ti.UI.createTabGroup(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, tabs: __alloyId1, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Globals.detail_navGroup = $.detail_navGroup;
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