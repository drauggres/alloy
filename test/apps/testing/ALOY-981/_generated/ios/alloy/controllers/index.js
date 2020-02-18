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
  { backgroundColor: "white", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    var __alloyId3 = [];$.__views["__alloyId4"] = Ti.UI.createButton(
    { systemButton: Ti.UI.iOS.SystemButton.CANCEL, title: "Cancel", id: "__alloyId4" });

    __alloyId3.push($.__views["__alloyId4"]);btnClick ? $.addListener($.__views["__alloyId4"], 'click', btnClick) : __defers['$.__views["__alloyId4"]!click!btnClick'] = true;$.__views["__alloyId5"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });__alloyId3.push($.__views["__alloyId5"]);$.__views["__alloyId6"] = Ti.UI.createButton(
    { systemButton: Ti.UI.iOS.SystemButton.CAMERA, title: "Camera", id: "__alloyId6" });

    __alloyId3.push($.__views["__alloyId6"]);btnClick ? $.addListener($.__views["__alloyId6"], 'click', btnClick) : __defers['$.__views["__alloyId6"]!click!btnClick'] = true;$.__views["__alloyId7"] = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE });__alloyId3.push($.__views["__alloyId7"]);$.__views["__alloyId8"] = Ti.UI.createButton(
    { title: 'Send', style: Ti.UI.iOS.SystemButtonStyle.DONE, id: "__alloyId8" });

    __alloyId3.push($.__views["__alloyId8"]);btnClick ? $.addListener($.__views["__alloyId8"], 'click', btnClick) : __defers['$.__views["__alloyId8"]!click!btnClick'] = true;$.__views["__alloyId1"] = Ti.UI.createToolbar(
    { items: __alloyId3, id: "__alloyId1" });

    $.__views["textArea"] = Ti.UI.createTextArea(
    { keyboardToolbarColor: "#999", keyboardToolbarHeight: "40", height: "30dp", width: "80%", top: 30, borderWidth: "1", borderRadius: "3", borderColor: "#bbb", font: { fontSize: 12 }, value: "Focus to see keyboard with toolbar", keyboardToolbar: $.__views["__alloyId1"], id: "textArea" });

    $.__views["index"].add($.__views["textArea"]);
    $.__views["__alloyId1"] = Ti.UI.createToolbar(
    { keyboardToolbar: $.__views["__alloyId1"], id: "textArea" });

  }
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function btnClick(e) {
    alert(e.source.title + ' is clicked');
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  if (true) {
    __defers['$.__views["__alloyId4"]!click!btnClick'] && $.addListener($.__views["__alloyId4"], 'click', btnClick);}
  if (true) {
    __defers['$.__views["__alloyId6"]!click!btnClick'] && $.addListener($.__views["__alloyId6"], 'click', btnClick);}
  if (true) {
    __defers['$.__views["__alloyId8"]!click!btnClick'] && $.addListener($.__views["__alloyId8"], 'click', btnClick);}


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map