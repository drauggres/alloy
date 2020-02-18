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
  if (true) {
    $.__views["__alloyId0"] = Ti.UI.createWindow(
    { title: "NavigationWindow" });

    $.__views["__alloyId2"] = Alloy.createWidget('alloy.button', 'widget', { title: "ios" });
    doSave ? $.__views["__alloyId2"].on('click', doSave) : __defers['$.__views["__alloyId2"]!click!doSave'] = true;$.__views["__alloyId0"].rightNavButton = $.__views["__alloyId2"].getViewEx({ recurse: true });$.__views["info"] = Ti.UI.createLabel(
    { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#000", textAlign: "center", font: { fontSize: "24dp", fontWeight: "bold" }, id: "info" });

    $.__views["__alloyId0"].add($.__views["info"]);
    $.__views["index"] = Ti.UI.createNavigationWindow(
    { backgroundColor: "#fff", modal: false, exitOnClose: true, window: $.__views["__alloyId0"], id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
  }
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doSave(e) {
    alert('save');
  }

  if (true || false) {
    $.info.text = 'Click the rightNavButton to "save"';
  } else if (false) {
    $.info.text = 'Click the menu button to "save"';
  } else {
    $.info.text = 'This app supported on Android, MobileWeb, and iOS only.';
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId2"]!click!doSave'] && $.__views["__alloyId2"].on('click', doSave);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;