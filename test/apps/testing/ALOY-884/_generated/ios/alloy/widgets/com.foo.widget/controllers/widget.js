var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.foo.widget/' + s :
  s.substring(0, index) + '/com.foo.widget/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/alloy/widget'))('com.foo.widget');this.__widgetId = 'com.foo.widget';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
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
  $.__views["widget"] = Ti.UI.createView(
  { id: "widget" });

  $.__views["widget"] && $.addTopLevelView($.__views["widget"]);
  $.__views["t"] = Ti.UI.createLabel(
  { textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, width: Ti.UI.SIZE, height: Ti.UI.SIZE, text: "Click a button to display something", color: "red", id: "t" });

  $.__views["widget"].add($.__views["t"]);
  $.__views["hl"] = Ti.UI.createView(
  { layout: "horizontal", width: Ti.UI.FILL, height: "100", id: "hl" });

  $.__views["widget"].add($.__views["hl"]);
  $.__views["a"] = Ti.UI.createButton(
  { title: "A", width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "a" });

  $.__views["hl"].add($.__views["a"]);
  $.__views["b"] = Ti.UI.createButton(
  { title: "B", width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "b" });

  $.__views["hl"].add($.__views["b"]);
  $.__views["c"] = Ti.UI.createButton(
  { title: "C", width: Ti.UI.SIZE, height: Ti.UI.SIZE, id: "c" });

  $.__views["hl"].add($.__views["c"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // add listeners for widget buttons
  $.a.addEventListener('click', function () {
    $.t.text = "You clicked A";
  });

  $.b.addEventListener('click', function () {
    $.t.text = "You clicked B";
  });

  $.c.addEventListener('click', function () {
    $.t.text = "You clicked C";
  });

  // anything defined against exports will be exposed as methods/properties
  // on any instance of the widget
  exports.setText = function (text) {
    $.t.text = text;
  };

  exports.getText = function () {
    return $.t.text;
  };

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/widgets/com.foo.widget/controllers/widget.js.map