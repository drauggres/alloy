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
  { backgroundColor: "#eee", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["label"] = Ti.UI.createLabel(
  { color: "#a00", font: { fontSize: "48dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, shadowColor: "#999", shadowOffset: { x: 3, y: 3 }, text: 'some text', id: "label" });

  $.__views["index"].add($.__views["label"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  $.newLabel = $.UI.create('Ti.UI.Label', {
    id: 'newLabel',
    classes: 'main',
    bottom: 0,
    text: '$.UI.create() Label',
    textAlign: 'center' });

  $.index.add($.newLabel);

  try {
    require('specs/index')($);
  } catch (e) {
    Ti.API.warn('no unit tests found for index.js');
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map