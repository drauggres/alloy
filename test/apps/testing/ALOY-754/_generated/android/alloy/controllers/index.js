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
  { backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["b"] = Ti.UI.createButton(
  { width: "50%", height: Ti.UI.SIZE, randomProp: "OK", mainConfig: Alloy.CFG.mainConfig, bothConfig: Alloy.CFG.bothConfig, themeConfig: Alloy.CFG.themeConfig, title: 'click me', id: "b" });

  $.__views["index"].add($.__views["b"]);
  showAlert ? $.addListener($.__views["b"], 'click', showAlert) : __defers['$.__views["b"]!click!showAlert'] = true;exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function showAlert(e) {
    Ti.API.debug(JSON.stringify(Alloy.CFG, null, '\t'));
    alert('Alloy.CFG.mainConfig = ' + Alloy.CFG.mainConfig);
    alert('Alloy.CFG.bothConfig = ' + Alloy.CFG.bothConfig);
    alert('Alloy.CFG.themeConfig = ' + Alloy.CFG.themeConfig);
  }
  $.index.open();

  // runtime unit tests
  if (!false) {
    require('specs/index')($);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["b"]!click!showAlert'] && $.addListener($.__views["b"], 'click', showAlert);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;