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
  { title: "My Test App", backgroundColor: "gray", customToolbar: "toolBarID", theme: "Theme.AppCompat.NoTitleBar", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["toolBarID"] = Ti.UI.createToolbar(
  { id: "toolBarID", title: "MyMenu", subtitle: "Subtitle", width: Ti.UI.FILL, top: 0, homeButtonEnabled: true, displayHomeAsUp: true, onHomeIconItemSelected: "clickAlert", barColor: "#639851" });

  $.__views["index"].add($.__views["toolBarID"]);
  function __alloyId0() {
    $.__views["index"].removeEventListener('open', __alloyId0);
    if ($.__views["index"].activity) {
      $.__views["index"].activity.setSupportActionBar($.__views.toolBarID);$.__views["index"].activity.actionBar.displayHomeAsUp = true;$.__views["index"].activity.actionBar.homeButtonEnabled = true;$.__views["index"].activity.actionBar.onHomeIconItemSelected = clickAlert;
    } else {
      Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
      Ti.API.warn('UI component which does not have an Android activity. Android Activities');
      Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
    }
  }
  $.__views["index"].addEventListener('open', __alloyId0);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function clickAlert() {
    alert('Alert!');
  }

  $.index.open();

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