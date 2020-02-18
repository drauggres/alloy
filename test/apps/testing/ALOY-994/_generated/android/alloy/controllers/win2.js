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
  this.__controllerPath = 'win2';
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
  $.__views["win2"] = Ti.UI.createWindow(
  { backgroundColor: "#000", modal: false, id: "win2" });

  $.__views["win2"] && $.addTopLevelView($.__views["win2"]);
  function __alloyId17() {
    $.__views["win2"].removeEventListener('open', __alloyId17);
    if ($.__views["win2"].activity) {
      $.__views["win2"].activity.actionBar.backgroundImage = "/actionbackground.png";$.__views["win2"].activity.actionBar.displayHomeAsUp = true;$.__views["win2"].activity.actionBar.icon = "/actionicon.png";$.__views["win2"].activity.actionBar.onHomeIconItemSelected = doHomeIcon;
    } else {
      Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
      Ti.API.warn('UI component which does not have an Android activity. Android Activities');
      Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
    }
  }
  $.__views["win2"].addEventListener('open', __alloyId17);
  $.__views["__alloyId18"] = Alloy.createController('menu', { id: "__alloyId18", __parentSymbol: $.__views["win2"] });
  $.__views["__alloyId18"].setParent($.__views["win2"]);
  $.__views["__alloyId19"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Window 2', id: "__alloyId19" });

  $.__views["win2"].add($.__views["__alloyId19"]);
  $.__views["__alloyId20"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Press the menu button', bottom: "20dp", id: "__alloyId20" });

  $.__views["win2"].add($.__views["__alloyId20"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.win2.addEventListener('open', function () {
    if ($.win2.activity) {
      $.win2.activity.actionBar.title = 'Child window';
    }
  });

  function doHomeIcon(e) {
    $.win2.close();
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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/win2.js.map