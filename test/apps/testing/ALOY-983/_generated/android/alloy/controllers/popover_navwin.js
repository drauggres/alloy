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
  this.__controllerPath = 'popover_navwin';
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
  $.__views["popover"] = Ti.UI.iPad.createPopover(
  { id: "popover", height: 100, width: 250 });

  $.__views["popover"] && $.addTopLevelView($.__views["popover"]);
  $.__views["__alloyId3"] = Ti.UI.createWindow(
  { title: "Navigation Window", id: "__alloyId3" });

  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { text: 'Popover with a NavigationWindow', id: "__alloyId4" });

  $.__views["__alloyId3"].add($.__views["__alloyId4"]);
  $.__views["popViewNavWin"] = Ti.UI.createNavigationWindow(
  { window: $.__views["__alloyId3"], id: "popViewNavWin", backgroundColor: "green", height: 300, width: 250 });

  $.__views["popover"].contentView = $.__views["popViewNavWin"];exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file


  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/popover_navwin.js.map