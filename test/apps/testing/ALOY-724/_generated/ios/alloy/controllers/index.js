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
  { backgroundColor: "#fff", modal: false, title: "window 1", id: "__alloyId2" });

  $.__views["__alloyId3"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold" }, text: 'Label 1', id: "__alloyId3" });

  $.__views["__alloyId2"].add($.__views["__alloyId3"]);
  $.__views["__alloyId1"] = Ti.UI.createTab(
  { window: $.__views["__alloyId2"], title: "tab 1", id: "__alloyId1" });

  __alloyId0.push($.__views["__alloyId1"]);$.__views["__alloyId5"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", modal: false, title: "window 2", id: "__alloyId5" });

  $.__views["__alloyId6"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold" }, text: 'Label 2', id: "__alloyId6" });

  $.__views["__alloyId5"].add($.__views["__alloyId6"]);
  $.__views["__alloyId4"] = Ti.UI.createTab(
  { window: $.__views["__alloyId5"], title: "tab 2", id: "__alloyId4" });

  __alloyId0.push($.__views["__alloyId4"]);$.__views["__alloyId8"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", modal: false, title: "window 3", id: "__alloyId8" });

  $.__views["__alloyId9"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#111", textAlign: "center", font: { fontSize: "48dp", fontWeight: "bold" }, text: 'Label 3', id: "__alloyId9" });

  $.__views["__alloyId8"].add($.__views["__alloyId9"]);
  $.__views["__alloyId7"] = Ti.UI.createTab(
  { window: $.__views["__alloyId8"], title: "tab 3", id: "__alloyId7" });

  __alloyId0.push($.__views["__alloyId7"]);$.__views["index"] = Ti.UI.createTabGroup(
  { backgroundColor: "#fff", tabs: __alloyId0, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  setCurrentTab ? $.addListener($.__views["index"], 'focus', setCurrentTab) : __defers['$.__views["index"]!focus!setCurrentTab'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var currentTab;
  function doClick(e) {
    alert('tab ' + currentTab + ': ' + e.source.title);
  }

  function setCurrentTab(e) {
    currentTab = e.index + 1;
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!focus!setCurrentTab'] && $.addListener($.__views["index"], 'focus', setCurrentTab);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map