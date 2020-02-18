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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, apiName: "Ti.UI.Window", id: "index", classes: [] });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["tester"] = Ti.UI.createLabel(
  { height: Ti.UI.SIZE, width: Ti.UI.SIZE, textAlign: "center", apiName: "Ti.UI.Label", id: "tester", classes: [] });

  $.__views["index"].add($.__views["tester"]);
  $.__views["behind"] = Ti.UI.createView(
  { height: "100dp", width: "100dp", backgroundColor: "#0f0", zIndex: 10, apiName: "Ti.UI.View", id: "behind", classes: [] });

  $.__views["index"].add($.__views["behind"]);
  $.__views["changer"] = Ti.UI.createLabel(
  { height: "50dp", width: Ti.UI.FILL, textAlign: "center", backgroundColor: "#006", color: "#fff", font: { fontSize: "24dp", fontWeight: "bold" }, bottom: 0, text: 'change classes', apiName: "Ti.UI.Label", id: "changer", classes: [] });

  $.__views["index"].add($.__views["changer"]);
  changeClasses ? $.addListener($.__views["changer"], 'click', changeClasses) : __defers['$.__views["changer"]!click!changeClasses'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var classes = [
  'transform',
  'opacity',
  'bgGradient',
  'greenBg',
  'red',
  'shadow',
  'huge',
  'right',
  'zIndex'];


  function changeClasses(e) {
    var c = $.tester.classes[0];
    if (c) {
      Ti.API.info('Removing class "' + c + '"');
      $.removeClass($.tester, c);
    } else {
      Ti.API.info('adding classes: ' + JSON.stringify(classes));
      $.addClass($.tester, classes);
    }
    $.tester.text = JSON.stringify($.tester.classes);
  }

  changeClasses();
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["changer"]!click!changeClasses'] && $.addListener($.__views["changer"], 'click', changeClasses);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map