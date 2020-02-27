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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["explain"] = Ti.UI.createLabel(
  { color: "blue", font: { fontSize: "10dp", fontStyle: "italic" }, top: 20, text: "You should see 6 labels above and 6 below the line", id: "explain" });

  $.__views["index"].add($.__views["explain"]);
  if (true) {
    $.__views["__alloyId0"] = Ti.UI.createLabel(
    { text: 'ios' });

    $.__views["index"].add($.__views["__alloyId0"]);
  }
  if (true || false) {
    $.__views["__alloyId1"] = Ti.UI.createLabel(
    { text: 'ios,mobileweb' });

    $.__views["index"].add($.__views["__alloyId1"]);
  }
  if (true || false) {
    $.__views["__alloyId2"] = Ti.UI.createLabel(
    { text: 'ios,android' });

    $.__views["index"].add($.__views["__alloyId2"]);
  }
  if (true || false || false) {
    $.__views["__alloyId3"] = Ti.UI.createLabel(
    { text: '!android' });

    $.__views["index"].add($.__views["__alloyId3"]);
  }
  if (false || true || false) {
    $.__views["__alloyId4"] = Ti.UI.createLabel(
    { text: '!mobileweb' });

    $.__views["index"].add($.__views["__alloyId4"]);
  }
  if (false || true || false) {
    $.__views["__alloyId5"] = Ti.UI.createLabel(
    { text: 'mobileweb,!android' });

    $.__views["index"].add($.__views["__alloyId5"]);
  }
  $.__views["__alloyId6"] = Ti.UI.createView(
  { height: 1, width: Ti.UI.FILL, backgroundColor: "black", top: 10 });

  $.__views["index"].add($.__views["__alloyId6"]);
  $.__views["ios"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: ios", id: "ios" });

  $.__views["index"].add($.__views["ios"]);
  $.__views["android"] = Ti.UI.createLabel(
  { height: 0, id: "android" });

  $.__views["index"].add($.__views["android"]);
  $.__views["mobileweb"] = Ti.UI.createLabel(
  { height: 0, id: "mobileweb" });

  $.__views["index"].add($.__views["mobileweb"]);
  $.__views["iosmobileweb"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: ios,mobilweb", id: "iosmobileweb" });

  $.__views["index"].add($.__views["iosmobileweb"]);
  $.__views["androidmobileweb"] = Ti.UI.createLabel(
  { height: 0, id: "androidmobileweb" });

  $.__views["index"].add($.__views["androidmobileweb"]);
  $.__views["iosandroid"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: ios,android", id: "iosandroid" });

  $.__views["index"].add($.__views["iosandroid"]);
  $.__views["notios"] = Ti.UI.createLabel(
  { height: 0, id: "notios" });

  $.__views["index"].add($.__views["notios"]);
  $.__views["notandroid"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: !android", id: "notandroid" });

  $.__views["index"].add($.__views["notandroid"]);
  $.__views["notmobileweb"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: !mobileweb", id: "notmobileweb" });

  $.__views["index"].add($.__views["notmobileweb"]);
  $.__views["mobilewebNotios"] = Ti.UI.createLabel(
  { height: 0, id: "mobilewebNotios" });

  $.__views["index"].add($.__views["mobilewebNotios"]);
  $.__views["mobilewebNotandroid"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, text: "TSS: mobileweb,!android", id: "mobilewebNotandroid" });

  $.__views["index"].add($.__views["mobilewebNotandroid"]);
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