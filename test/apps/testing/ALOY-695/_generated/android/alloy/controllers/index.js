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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  addNewLabel ? $.addListener($.__views["index"], 'click', addNewLabel) : __defers['$.__views["index"]!click!addNewLabel'] = true;$.__views["staticLabel"] = Ti.UI.createLabel(
  { color: "#a00", font: { fontSize: "32dp", fontWeight: "bold" }, textAlign: "center", top: "15dp", shadowColor: "#aaa", shadowOffset: { x: 2, y: 2 }, text: 'click me to open another window', id: "staticLabel" });

  $.__views["index"].add($.__views["staticLabel"]);
  openFooBar ? $.addListener($.__views["staticLabel"], 'click', openFooBar) : __defers['$.__views["staticLabel"]!click!openFooBar'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var ctr = 0;
  function addNewLabel(e) {
    var index = ctr % Alloy.Globals.classes.length;
    var label = $.UI.create('Label', {
      classes: Alloy.Globals.classes[index],
      id: 'newLabel' + (ctr + 1),
      text: 'this is label #' + (ctr + 1),
      touchEnabled: false });


    $.index.add(label);
    ctr++;
  }

  function openFooBar(e) {
    Alloy.createController('foo/bar').getView().open();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!click!addNewLabel'] && $.addListener($.__views["index"], 'click', addNewLabel);__defers['$.__views["staticLabel"]!click!openFooBar'] && $.addListener($.__views["staticLabel"], 'click', openFooBar);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map