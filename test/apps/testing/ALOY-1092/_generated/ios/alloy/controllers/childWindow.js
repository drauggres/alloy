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
  this.__controllerPath = 'childWindow';
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
    { backgroundColor: "#fff", layout: "vertical", title: "Child window" });

    $.__views["close"] = Ti.UI.createButton(
    { id: "close", title: "Close" });

    doClose ? $.addListener($.__views["close"], 'click', doClose) : __defers['$.__views["close"]!click!doClose'] = true;$.__views["__alloyId0"].leftNavButton = $.__views["close"];$.__views["argLabel"] = Ti.UI.createLabel(
    function () {
      var o = {};
      Alloy.deepExtend(true, o, { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#000", textAlign: "center", font: { fontSize: "24dp", fontWeight: "bold" }, text: "args.someProperty is falsey", top: 25 });
      if ($.args.someProperty) Alloy.deepExtend(true, o, { text: "args.someProperty is truthy" });
      Alloy.deepExtend(true, o, { id: "argLabel" });
      return o;
    }());

    $.__views["__alloyId0"].add($.__views["argLabel"]);
    if ($.args.someProperty) {
      $.__views["argLabelTwo"] = Ti.UI.createLabel(
      { height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: "#000", textAlign: "center", font: { fontSize: "24dp", fontWeight: "bold" }, text: "XML-based if condition", top: 25, id: "argLabelTwo" });

      $.__views["__alloyId0"].add($.__views["argLabelTwo"]);
    }
    $.__views["navWin"] = Ti.UI.createNavigationWindow(
    { window: $.__views["__alloyId0"], id: "navWin" });

    $.__views["navWin"] && $.addTopLevelView($.__views["navWin"]);
  }
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var args = arguments[0] || {};

  function doClose() {
    $.navWin.close();
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  if (true) {
    __defers['$.__views["close"]!click!doClose'] && $.addListener($.__views["close"], 'click', doClose);}


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;