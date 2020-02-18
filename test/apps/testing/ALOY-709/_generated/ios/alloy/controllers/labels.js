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
  this.__controllerPath = 'labels';
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
  $.__views["labels"] = Ti.UI.createView(
  { apiName: "Ti.UI.View", backgroundColor: "#fcc", height: Ti.UI.SIZE, layout: "vertical", id: "labels", classes: [] });

  $.__views["labels"] && $.addTopLevelView($.__views["labels"]);
  $.__views["__alloyId2"] = Ti.UI.createLabel(
  { color: "#000", height: Ti.UI.SIZE, width: Ti.UI.SIZE, top: 15, backgroundColor: "#ccf", text: 'label 1', apiName: "Ti.UI.Label", classes: ["someClass"], id: "__alloyId2" });

  $.__views["labels"].add($.__views["__alloyId2"]);
  $.__views["__alloyId3"] = Ti.UI.createLabel(
  { color: "#000", height: Ti.UI.SIZE, width: Ti.UI.SIZE, top: 15, backgroundColor: "#ccf", text: 'label 2', apiName: "Ti.UI.Label", classes: ["someClass"], id: "__alloyId3" });

  $.__views["labels"].add($.__views["__alloyId3"]);
  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { color: "#000", height: Ti.UI.SIZE, width: Ti.UI.SIZE, top: 15, backgroundColor: "#ccf", text: 'label 3', apiName: "Ti.UI.Label", classes: ["someClass"], id: "__alloyId4" });

  $.__views["labels"].add($.__views["__alloyId4"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  try {
    require('specs/labels')($);
  } catch (e) {
    Ti.API.warn('no unit tests found for labels.js');
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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/labels.js.map