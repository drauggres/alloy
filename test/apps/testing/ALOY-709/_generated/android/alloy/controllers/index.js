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
  { backgroundColor: "#eee", fullscreen: false, exitOnClose: true, layout: "vertical", apiName: "Ti.UI.Window", id: "index", classes: [] });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["label"] = Ti.UI.createLabel(
  { color: "#a00", font: { fontSize: "48dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, shadowColor: "#999", shadowOffset: { x: 3, y: 3 }, text: 'some text', apiName: "Ti.UI.Label", id: "label", classes: ["main", "shadow"] });

  $.__views["index"].add($.__views["label"]);
  $.__views["__alloyId0"] = Alloy.createController('labels', { apiName: "Alloy.Require", id: "__alloyId0", classes: [], __parentSymbol: $.__views["index"] });
  $.__views["__alloyId0"].setParent($.__views["index"]);
  $.__views["__alloyId1"] = Alloy.createController('buttons', { apiName: "Alloy.Require", id: "__alloyId1", classes: [], __parentSymbol: $.__views["index"] });
  $.__views["__alloyId1"].setParent($.__views["index"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  try {
    require('specs/index')($);
  } catch (e) {
    Ti.API.warn('no unit tests found for index.js');
  }

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