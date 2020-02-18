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
  var __alloyId0 = [];$.__views["__alloyId2"] = Ti.UI.createWindow(
  { title: "tab 1", backgroundColor: "#fff", id: "__alloyId2" });

  $.__views["__alloyId1"] = Ti.UI.createTab(
  { window: $.__views["__alloyId2"], title: "tab 1", id: "__alloyId1" });

  __alloyId0.push($.__views["__alloyId1"]);$.__views["__alloyId4"] = Ti.UI.createWindow(
  { title: "tab 2", backgroundColor: "#fff", id: "__alloyId4" });

  $.__views["__alloyId3"] = Ti.UI.createTab(
  { window: $.__views["__alloyId4"], title: "tab 2", id: "__alloyId3" });

  __alloyId0.push($.__views["__alloyId3"]);$.__views["ScheduleGroup"] = Ti.UI.createTabGroup(
  { tabs: __alloyId0, id: "ScheduleGroup", activeTabIconTint: "yellow", tabsBackgroundSelectedColor: "yellow" });

  $.__views["ScheduleGroup"] && $.addTopLevelView($.__views["ScheduleGroup"]);
  doOnOpen ? $.addListener($.__views["ScheduleGroup"], 'open', doOnOpen) : __defers['$.__views["ScheduleGroup"]!open!doOnOpen'] = true;doOnFocus ? $.addListener($.__views["ScheduleGroup"], 'focus', doOnFocus) : __defers['$.__views["ScheduleGroup"]!focus!doOnFocus'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doOnOpen() {
    Ti.API.info('doOnOpen');
  }

  function doOnFocus() {
    Ti.API.info('doOnFocus');
  }

  function doSettingsMenuItem() {
    Ti.API.info('doSettingsMenuItem');
  }

  function doRefresh() {
    Ti.API.info('doRefresh');
  }

  $.ScheduleGroup.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["ScheduleGroup"]!open!doOnOpen'] && $.addListener($.__views["ScheduleGroup"], 'open', doOnOpen);__defers['$.__views["ScheduleGroup"]!focus!doOnFocus'] && $.addListener($.__views["ScheduleGroup"], 'focus', doOnFocus);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map