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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId4 = [];$.__views["__alloyId5"] = { properties: { title: "One", id: "__alloyId5" } };__alloyId4.push($.__views["__alloyId5"]);$.__views["__alloyId6"] = { properties: { title: "Two", id: "__alloyId6" } };__alloyId4.push($.__views["__alloyId6"]);$.__views["__alloyId7"] = { properties: { title: "Three", id: "__alloyId7" } };__alloyId4.push($.__views["__alloyId7"]);$.__views["__alloyId2"] = Ti.UI.createListSection(
  { id: "__alloyId2" });

  $.__views["__alloyId2"].items = __alloyId4;var __alloyId8 = [];__alloyId8.push($.__views["__alloyId2"]);$.__views["__alloyId10"] = Alloy.createController('section', { id: "__alloyId10" });
  __alloyId8.push($.__views["__alloyId10"].getViewEx({ recurse: true }));$.__views["__alloyId0"] = Ti.UI.createListView(
  { sections: __alloyId8, id: "__alloyId0" });

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map