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
  var __alloyId1 = {};var __alloyId4 = [];var __alloyId6 = { type: 'Ti.UI.Label', properties: { bindid: "title" } };__alloyId4.push(__alloyId6);if (true) {
    var __alloyId9 = [];__alloyId4.push($.__views["__alloyId8"]);var __alloyId12 = { title: "Label 1" };
    __alloyId9.push(__alloyId12);var __alloyId13 = { title: "Label 2" };
    __alloyId9.push(__alloyId13);var __alloyId14 = { type: 'Ti.UI.TabbedBar', bindId: 'tabs', properties: { labels: __alloyId9, bindId: "tabs" } };__alloyId4.push(__alloyId14);}
  var __alloyId3 = { properties: { name: "TabbedItem" }, childTemplates: __alloyId4 };__alloyId1["TabbedItem"] = __alloyId3;var __alloyId17 = [];$.__views["__alloyId18"] = { template: "TabbedItem", tabs: { index: 0 } };__alloyId17.push($.__views["__alloyId18"]);$.__views["__alloyId19"] = { template: "TabbedItem", tabs: { index: 1 } };__alloyId17.push($.__views["__alloyId19"]);$.__views["__alloyId15"] = Ti.UI.createListSection(
  {});

  $.__views["__alloyId15"].items = __alloyId17;var __alloyId20 = [];__alloyId20.push($.__views["__alloyId15"]);$.__views["__alloyId0"] = Ti.UI.createListView(
  { sections: __alloyId20, templates: __alloyId1 });

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