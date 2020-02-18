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
  { layout: "vertical", backgroundColor: "white", top: 20, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["title1"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 10, text: "Alloy.Globals.someProperty!=true", font: { fontSize: "14dp" } });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true" });
    Alloy.deepExtend(true, o, { color: "blue", text: "Platform: this is iOS" });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Overriding platform with custom TSS" });
    Alloy.deepExtend(true, o, { id: "title1" });
    return o;
  }());

  $.__views["index"].add($.__views["title1"]);
  $.__views["title2"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 10, text: "Alloy.Globals.someProperty!=true", font: { fontSize: "14dp" } });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true" });
    Alloy.deepExtend(true, o, { color: "blue" });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Platform: iOS, Alloy.Globals.someProperty==true" });
    Alloy.deepExtend(true, o, { id: "title2" });
    return o;
  }());

  $.__views["index"].add($.__views["title2"]);
  $.__views["title3"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 10, text: "Alloy.Globals.someProperty!=true", font: { fontSize: "14dp" } });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true" });
    Alloy.deepExtend(true, o, { color: "blue", text: "You should see this for label 3", id: "title3" });
    return o;
  }());

  $.__views["index"].add($.__views["title3"]);
  $.__views["title4"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 10, text: "Alloy.Globals.someProperty!=true", font: { fontSize: "14dp" } });
    if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true" });
    Alloy.deepExtend(true, o, { id: "title4" });
    return o;
  }());

  $.__views["index"].add($.__views["title4"]);
  if (Alloy.Globals.someProperty) {
    $.__views["title5"] = Ti.UI.createLabel(
    function () {
      var o = {};
      Alloy.deepExtend(true, o, { top: 10, text: "Alloy.Globals.someProperty!=true", font: { fontSize: "14dp" } });
      if (Alloy.Globals.someProperty) Alloy.deepExtend(true, o, { text: "Custom TSS: Alloy.Globals.someProperty==true" });
      Alloy.deepExtend(true, o, { color: "blue", id: "title5" });
      return o;
    }());

    $.__views["index"].add($.__views["title5"]);
  }
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