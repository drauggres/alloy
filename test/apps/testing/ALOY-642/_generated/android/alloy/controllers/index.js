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
  { backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["view1"] = Ti.UI.createView(
  { height: 100, width: 100, backgroundColor: "#f00", top: 15, opacity: 0, id: "view1" });

  $.__views["index"].add($.__views["view1"]);
  $.__views["view2"] = Ti.UI.createView(
  { height: 100, width: 100, backgroundColor: "#00f", bottom: 15, opacity: 1, id: "view2" });

  $.__views["index"].add($.__views["view2"]);
  $.__views["view3"] = Ti.UI.createView(
  { height: 60, width: 200, backgroundColor: "#0f0", opacity: 1, id: "view3" });

  $.__views["index"].add($.__views["view3"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var anim = require('alloy/animation');

  var DURATION = 1000;

  function fadeIn(view, duration) {
    anim.fadeIn(view, duration, function () {
      fadeOut(view, duration);
    });
  }

  function fadeOut(view, duration) {
    anim.fadeOut(view, duration, function () {
      fadeIn(view, duration);
    });
  }

  $.index.open();

  fadeIn($.view1, 1000);
  fadeOut($.view2, 1000);
  fadeIn($.view3, 2000);

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