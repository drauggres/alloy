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
  $.__views["label"] = Ti.UI.createLabel(
  { text: L('tester', 'nothing assigned yet'), color: "#000", font: { fontSize: "24dp", fontWeight: "bold" }, id: "label" });

  $.__views["index"].add($.__views["label"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  // These should be found
  var bar = Ti.Locale.getString('foo');
  var bar1 = Titanium.Locale.getString('foo1good');
  var another = L('found_me');

  // It won't, and shouldn't, find these. Only explicit strings will be captured.
  var foo = 'tooooooo';
  var bar2 = Titanium.Locale.getString(foo);
  var bar3 = L('hi' + foo + 'there');

  // It also shouldn't find these as they have invalid characters. Only alphanumberic and
  // underscores are supported. It must also start with a letter.
  L('OMG****');
  L('foo%ipod');
  Ti.Locale.getString('123badvalue');

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