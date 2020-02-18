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
  { title: "ALOY-991", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    const __alloyId2 = () => {
      $.__views["index"].removeEventListener('open', __alloyId2);
      if ($.__views["index"].activity) {
        $.__views["index"].activity.onCreateOptionsMenu = e => {
          var __alloyId0 = { showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, title: "One", id: "item1" };
          if (false) {
            __alloyId0.actionView = false;
          }
          if (e.menu) {
            $.__views["item1"] = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["item1"]) {
            $.__views["item1"].applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
          }
          doMenuClick ? $.addListener($.__views["item1"], 'click', doMenuClick) : __defers['$.__views["item1"]!click!doMenuClick'] = true;var __alloyId1 = { showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, title: "Two", icon: Ti.Android.R.drawable.ic_menu_share, id: "item2" };
          if (false) {
            __alloyId1.actionView = false;
          }
          if (e.menu) {
            $.__views["item2"] = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["item2"]) {
            $.__views["item2"].applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
          }
          doMenuClick ? $.addListener($.__views["item2"], 'click', doMenuClick) : __defers['$.__views["item2"]!click!doMenuClick'] = true;$.__views["index"].activity.actionBar.title = "Menu Title";$.__views["index"].activity.actionBar.subtitle = "menu subtitle";$.__views["index"].activity.actionBar.displayHomeAsUp = true;
        };
      } else {
        Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
        Ti.API.warn('or other UI component which does not have an Android activity.');
        Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
      }
    };
    $.__views["index"].addEventListener('open', __alloyId2);
  }
  $.__views["label"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#fff", text: 'Hello! Click Me!', id: "label" });

  $.__views["index"].add($.__views["label"]);
  doClick ? $.addListener($.__views["label"], 'click', doClick) : __defers['$.__views["label"]!click!doClick'] = true;exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick() {
    alert('label clicked');
  }
  function doMenuClick() {
    alert('menu clicked');
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["item1"]!click!doMenuClick'] && $.addListener($.__views["item1"], 'click', doMenuClick);__defers['$.__views["item2"]!click!doMenuClick'] && $.addListener($.__views["item2"], 'click', doMenuClick);__defers['$.__views["label"]!click!doClick'] && $.addListener($.__views["label"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;