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
  { backgroundColor: "#ff0", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["label"] = Ti.UI.createLabel(
  { backgroundColor: "black", text: L(Alloy.CFG.someText, Alloy.CFG.someText), height: Ti.UI.SIZE, font: { fontSize: 24, fontWeight: "bold" }, width: Ti.UI.SIZE, color: "red", top: 10, textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT, id: "label" });

  $.__views["index"].add($.__views["label"]);
  $.__views["__alloyId0"] = Alloy.createWidget('com.test.hellobutton', 'widget', { id: "__alloyId0", __parentSymbol: $.__views["index"] });
  $.__views["__alloyId0"].setParent($.__views["index"]);
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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map