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
  $.__views["__alloyId0"] = Ti.UI.createWindow(
  { title: "Proxy Shorthands", id: "__alloyId0" });

  $.__views["__alloyId2"] = Ti.UI.createButton(
  { title: "Left", id: "__alloyId2" });

  doLeftClick ? $.addListener($.__views["__alloyId2"], 'click', doLeftClick) : __defers['$.__views["__alloyId2"]!click!doLeftClick'] = true;$.__views["__alloyId0"].leftNavButton = $.__views["__alloyId2"];$.__views["__alloyId3"] = Ti.UI.createButton(
  { title: "Right", id: "__alloyId3" });

  $.__views["__alloyId0"].rightNavButton = $.__views["__alloyId3"];doRightClick ? $.addListener($.__views["__alloyId3"], 'click', doRightClick) : __defers['$.__views["__alloyId3"]!click!doRightClick'] = true;$.__views["index"] = Ti.UI.createNavigationWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, window: $.__views["__alloyId0"], id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doLeftClick() {
    alert('Left button clicked');
  }
  function doRightClick() {
    alert('Right button clicked');
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId2"]!click!doLeftClick'] && $.addListener($.__views["__alloyId2"], 'click', doLeftClick);__defers['$.__views["__alloyId3"]!click!doRightClick'] && $.addListener($.__views["__alloyId3"], 'click', doRightClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map