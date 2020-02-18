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
  $.__views["settingsWin"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "settingsWin", title: "Settings", tabBarHidden: true });

  $.__views["settingsWin"] && $.addTopLevelView($.__views["settingsWin"]);
  var __alloyId0 = {};var __alloyId2 = [];var __alloyId3 = { type: 'Ti.UI.TextField', bindId: 'textfield', properties: { bindId: "textfield", autocorrect: false, hintText: "User name / e-mail address" }, events: { change: TFUpdate } };__alloyId2.push(__alloyId3);var __alloyId1 = { properties: { name: "inputTemplate" }, childTemplates: __alloyId2 };__alloyId0["inputTemplate"] = __alloyId1;var __alloyId5 = [];$.__views["__alloyId6"] = { template: "inputTemplate", textfield: { value: "" }, properties: { id: "__alloyId6" } };__alloyId5.push($.__views["__alloyId6"]);$.__views["idSection"] = Ti.UI.createListSection(
  { headerTitle: "Login Id", id: "idSection" });

  $.__views["idSection"].items = __alloyId5;var __alloyId7 = [];__alloyId7.push($.__views["idSection"]);$.__views["listView"] = Ti.UI.createListView(
  { sections: __alloyId7, templates: __alloyId0, id: "listView", defaultItemTemplate: "template", allowsSelection: false });

  $.__views["settingsWin"].add($.__views["listView"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.settingsWin.open();

  function TFUpdate() {}

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map