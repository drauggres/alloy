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
  { layout: "vertical", backgroundColor: "white", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["label1"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 20, left: 0, font: { fontSize: "14dp" }, color: "black" });
    if (Alloy.Globals.isiPhone6) Alloy.deepExtend(true, o, { font: { fontSize: "16dp" }, color: "green" });
    Alloy.deepExtend(true, o, { color: "blue", text: "This is a label", id: "label1" });
    return o;
  }());

  $.__views["index"].add($.__views["label1"]);
  $.__views["label2"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 20, left: 0, font: { fontSize: "14dp" }, color: "black" });
    if (Alloy.Globals.isiPhone6) Alloy.deepExtend(true, o, { font: { fontSize: "16dp" }, color: "green" });
    Alloy.deepExtend(true, o, { color: "blue", text: "This is also a label", id: "label2" });
    return o;
  }());

  $.__views["index"].add($.__views["label2"]);
  $.__views["label3"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 20, left: 0, font: { fontSize: "14dp" }, color: "black" });
    if (Alloy.Globals.isiPhone6) Alloy.deepExtend(true, o, { font: { fontSize: "16dp" }, color: "green" });
    Alloy.deepExtend(true, o, { color: "blue", text: "Tap for new Window" });
    if (myFunction()) Alloy.deepExtend(true, o, { font: { fontSize: "18dp" }, color: "red" });
    Alloy.deepExtend(true, o, { id: "label3" });
    return o;
  }());

  $.__views["index"].add($.__views["label3"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function myFunction() {
    return true;
  }

  $.label3.addEventListener('click', function () {
    var child = Alloy.createController('childWindow', { someProperty: true });
    console.log('__controllerPath = ' + child.__controllerPath);
    console.log('args = ' + JSON.stringify(child.args));
    child.getView().open();
  });

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map