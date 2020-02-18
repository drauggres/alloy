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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    $.__views["__alloyId3"] = Ti.UI.createView(
    {});

    $.__views["__alloyId4"] = Ti.UI.createLabel(
    { text: 'Hello Preview' });

    $.__views["__alloyId3"].add($.__views["__alloyId4"]);
    var __alloyId5 = [];$.__views["__alloyId7"] = Ti.UI.iOS.createPreviewAction(
    { title: "Email", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE });

    __alloyId5.push($.__views["__alloyId7"]);fn ? $.addListener($.__views["__alloyId7"], 'click', fn) : __defers['$.__views["__alloyId7"]!click!fn'] = true;$.__views["__alloyId9"] = Ti.UI.iOS.createPreviewAction(
    { title: "Confirm", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED });

    fn ? $.addListener($.__views["__alloyId9"], 'click', fn) : __defers['$.__views["__alloyId9"]!click!fn'] = true;$.__views["__alloyId10"] = Ti.UI.iOS.createPreviewAction(
    { title: "Cancel", style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED });

    fn ? $.addListener($.__views["__alloyId10"], 'click', fn) : __defers['$.__views["__alloyId10"]!click!fn'] = true;$.__views["__alloyId8"] = Ti.UI.iOS.createPreviewActionGroup(
    { actions: [$.__views["__alloyId9"], $.__views["__alloyId10"]], title: "Delete" });

    __alloyId5.push($.__views["__alloyId8"]);$.__views["__alloyId1"] = Ti.UI.iOS.createPreviewContext(
    { preview: $.__views["__alloyId3"], actions: __alloyId5 });

    fn ? $.addListener($.__views["__alloyId1"], 'peek', fn) : __defers['$.__views["__alloyId1"]!peek!fn'] = true;}
  var __alloyId13 = [];$.__views["__alloyId14"] = { properties: { title: "Hello" } };__alloyId13.push($.__views["__alloyId14"]);$.__views["__alloyId11"] = Ti.UI.createListSection(
  {});

  $.__views["__alloyId11"].items = __alloyId13;var __alloyId15 = [];__alloyId15.push($.__views["__alloyId11"]);$.__views["__alloyId0"] = Ti.UI.createListView(
  { sections: __alloyId15, previewContext: $.__views["__alloyId1"] });

  $.__views["index"].add($.__views["__alloyId0"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function fn(e) {
    Ti.API.info('sectionIndex: ' + e.sectionIndex);
    Ti.API.info('itemIndex: ' + e.itemIndex);
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  if (true) {
    __defers['$.__views["__alloyId7"]!click!fn'] && $.addListener($.__views["__alloyId7"], 'click', fn);}
  if (true) {
    __defers['$.__views["__alloyId9"]!click!fn'] && $.addListener($.__views["__alloyId9"], 'click', fn);}
  if (true) {
    __defers['$.__views["__alloyId10"]!click!fn'] && $.addListener($.__views["__alloyId10"], 'click', fn);}
  __defers['$.__views["__alloyId1"]!peek!fn'] && $.addListener($.__views["__alloyId1"], 'peek', fn);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;