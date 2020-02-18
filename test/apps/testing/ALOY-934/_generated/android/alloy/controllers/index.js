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
  ;;var __alloyId3 = [];__alloyId3.push("Confirm");__alloyId3.push("Cancel");var __alloyId8 = [];__alloyId8.push("Help");if (true) {
    $.__views["__alloyId10"] = Ti.UI.createView(
    { id: "__alloyId10" });

    $.__views["__alloyId11"] = Ti.UI.createLabel(
    { font: { fontSize: "14dp" }, text: "In an AndroidView", id: "__alloyId11" });

    $.__views["__alloyId10"].add($.__views["__alloyId11"]);
  }
  $.__views["dialog"] = Ti.UI.createOptionDialog(
  { options: __alloyId3, buttonNames: __alloyId8, androidView: $.__views["__alloyId10"], id: "dialog", title: "Delete File?" });

  $.__views["__alloyId12"] = Ti.UI.createLabel(
  { font: { fontSize: "14dp" }, text: "Click for OptionDialog", id: "__alloyId12" });

  $.__views["index"].add($.__views["__alloyId12"]);
  showOptions ? $.addListener($.__views["__alloyId12"], 'click', showOptions) : __defers['$.__views["__alloyId12"]!click!showOptions'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function showOptions() {
    $.dialog.show();
  }
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId12"]!click!showOptions'] && $.addListener($.__views["__alloyId12"], 'click', showOptions);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map