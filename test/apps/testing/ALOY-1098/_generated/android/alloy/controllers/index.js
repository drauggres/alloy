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

  require('/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
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


  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    const __alloyId11 = () => {
      $.__views["index"].removeEventListener('open', __alloyId11);
      if ($.__views["index"].activity) {
        $.__views["index"].activity.onCreateOptionsMenu = e => {
          $.__views["__alloyId3"] = Ti.UI.createTextField(
          { hintText: "Use a SearchView" });

          $.__views["__alloyId3"] = $.__views["__alloyId3"];var __alloyId4 = { showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW, icon: Ti.Android.R.drawable.ic_menu_search };
          if ($.__views["__alloyId3"]) {
            __alloyId4.actionView = $.__views["__alloyId3"];
          }
          if (e.menu) {
            $.__views["__alloyId1"] = e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["__alloyId1"]) {
            $.__views["__alloyId1"].applyProperties(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs));
          }
          $.__views["__alloyId7"] = Ti.UI.createButton(
          { title: "Click" });

          $.__views["__alloyId7"] = $.__views["__alloyId7"];var __alloyId8 = { showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM };
          if ($.__views["__alloyId7"]) {
            __alloyId8.actionView = $.__views["__alloyId7"];
          }
          if (e.menu) {
            $.__views["__alloyId5"] = e.menu.add(_.pick(__alloyId8, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["__alloyId5"]) {
            $.__views["__alloyId5"].applyProperties(_.omit(__alloyId8, Alloy.Android.menuItemCreateArgs));
          }
          var __alloyId10 = { title: "Normal" };
          if (false) {
            __alloyId10.actionView = false;
          }
          if (e.menu) {
            $.__views["__alloyId9"] = e.menu.add(_.pick(__alloyId10, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["__alloyId9"]) {
            $.__views["__alloyId9"].applyProperties(_.omit(__alloyId10, Alloy.Android.menuItemCreateArgs));
          }

        };
      } else {
        Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
        Ti.API.warn('or other UI component which does not have an Android activity.');
        Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
      }
    };
    $.__views["index"].addEventListener('open', __alloyId11);
  }
  if (true) {
    $.__views["__alloyId12"] = Ti.UI.createLabel(
    { color: "black", font: { fontSize: "14dp" }, text: "Tap search icon to expand ActionView" });

    $.__views["index"].add($.__views["__alloyId12"]);
  }
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
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