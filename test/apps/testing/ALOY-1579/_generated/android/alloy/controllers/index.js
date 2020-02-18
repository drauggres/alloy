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
  function __alloyId1() {
    $.__views["index"].removeEventListener('open', __alloyId1);
    if ($.__views["index"].activity) {
      $.__views["index"].activity.actionBar.displayHomeAsUp = true;$.__views["index"].activity.actionBar.onHomeIconItemSelected = doHomeIcon;
    } else {
      Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
      Ti.API.warn('UI component which does not have an Android activity. Android Activities');
      Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
    }
  }
  $.__views["index"].addEventListener('open', __alloyId1);
  $.__views["drawer"] = Ti.UI.Android.createDrawerLayout(
  { id: "drawer" });

  $.__views["index"].add($.__views["drawer"]);
  $.__views["__alloyId3"] = Ti.UI.createView(
  { backgroundColor: "red", id: "__alloyId3" });

  $.__views["drawer"].leftView = $.__views["__alloyId3"];$.__views["__alloyId5"] = Ti.UI.createView(
  { backgroundColor: "yellow", id: "__alloyId5" });

  $.__views["__alloyId6"] = Ti.UI.createButton(
  { title: 'RIGHT', id: "__alloyId6" });

  $.__views["__alloyId5"].add($.__views["__alloyId6"]);
  doButtonClick ? $.addListener($.__views["__alloyId6"], 'click', doButtonClick) : __defers['$.__views["__alloyId6"]!click!doButtonClick'] = true;$.__views["drawer"].centerView = $.__views["__alloyId5"];$.__views["__alloyId8"] = Ti.UI.createView(
  { backgroundColor: "orange", id: "__alloyId8" });

  $.__views["drawer"].rightView = $.__views["__alloyId8"];exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doButtonClick(e) {
    $.drawer.toggleRight();
  }

  function doHomeIcon(e) {
    $.drawer.toggleLeft();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId6"]!click!doButtonClick'] && $.addListener($.__views["__alloyId6"], 'click', doButtonClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map