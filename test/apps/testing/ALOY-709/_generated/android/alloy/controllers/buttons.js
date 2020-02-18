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
  this.__controllerPath = 'buttons';
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
  $.__views["button1"] = Ti.UI.createButton(
  { title: 'button 1', apiName: "Ti.UI.Button", id: "button1", classes: ["bob", "lou"] });

  $.__views["button1"] && $.addTopLevelView($.__views["button1"]);
  $.__views["button2"] = Ti.UI.createButton(
  { title: 'button 2', apiName: "Ti.UI.Button", id: "button2", classes: ["bob", "lou"] });

  $.__views["button2"] && $.addTopLevelView($.__views["button2"]);
  $.__views["button3"] = Ti.UI.createButton(
  { title: 'button 3', id: "button3" });

  $.__views["button3"] && $.addTopLevelView($.__views["button3"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  try {
    require('specs/buttons')($);
  } catch (e) {
    Ti.API.warn('no unit tests found for buttons.js');
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