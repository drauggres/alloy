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
  { backgroundColor: "#fff", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId1"] = Ti.UI.createAttributedString(
  { attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6] }], text: 'Label - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.' });

  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: Ti.UI.SIZE, attributedString: $.__views["__alloyId1"] });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId3"] = Ti.UI.createAttributedString(
  { attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6] }], text: 'TextField - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.' });

  $.__views["__alloyId4"] = Ti.UI.createAttributedString(
  { attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6] }], text: 'TextField HintText - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.' });

  $.__views["__alloyId2"] = Ti.UI.createTextField(
  { top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: Ti.UI.SIZE, attributedString: $.__views["__alloyId3"], attributedHintText: $.__views["__alloyId4"] });

  $.__views["index"].add($.__views["__alloyId2"]);
  $.__views["__alloyId6"] = Ti.UI.createAttributedString(
  { attributes: [{ type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE, value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE, range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "red", range: [18, 12] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "blue", range: [31, 2] }, { type: Ti.UI.ATTRIBUTE_BACKGROUND_COLOR, value: "yellow", range: [40, 6] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "orange", range: [0, 107] }, { type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR, value: "black", range: [40, 6] }], text: 'TextArea - Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.' });

  $.__views["__alloyId5"] = Ti.UI.createTextArea(
  { top: 20, right: 10, left: 10, width: Ti.UI.FILL, height: 200, attributedString: $.__views["__alloyId6"] });

  $.__views["index"].add($.__views["__alloyId5"]);
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