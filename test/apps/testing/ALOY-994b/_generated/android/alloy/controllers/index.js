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
  var __alloyId1 = [];$.__views["__alloyId3"] = Ti.UI.createWindow(
  { backgroundColor: "#000", title: "Win 1" });

  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: "I am Window 1" });

  $.__views["__alloyId3"].add($.__views["__alloyId4"]);
  $.__views["__alloyId2"] = Ti.UI.createTab(
  { window: $.__views["__alloyId3"], title: "Tab 1" });

  __alloyId1.push($.__views["__alloyId2"]);$.__views["__alloyId6"] = Ti.UI.createWindow(
  { backgroundColor: "#000", title: "Win 2" });

  $.__views["__alloyId7"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: "I am Window 2" });

  $.__views["__alloyId6"].add($.__views["__alloyId7"]);
  $.__views["__alloyId5"] = Ti.UI.createTab(
  { window: $.__views["__alloyId6"], title: "Tab 2" });

  __alloyId1.push($.__views["__alloyId5"]);$.__views["index"] = Ti.UI.createTabGroup(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, tabs: __alloyId1, id: "index" });

  const __alloyId9 = () => {
    $.__views["index"].removeEventListener('open', __alloyId9);
    if ($.__views["index"].activity) {
      $.__views["index"].activity.actionBar.title = "My App Title";$.__views["index"].activity.actionBar.subtitle = "App subtitle";$.__views["index"].activity.actionBar.backgroundImage = "/actionbackground.png";$.__views["index"].activity.actionBar.icon = "/actionicon.png";
    } else {
      Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
      Ti.API.warn('UI component which does not have an Android activity. Android Activities');
      Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
    }
  };
  $.__views["index"].addEventListener('open', __alloyId9);
  const __alloyId15 = () => {
    $.__views["index"].removeEventListener('open', __alloyId15);
    if ($.__views["index"].activity) {
      $.__views["index"].activity.onCreateOptionsMenu = e => {
        var __alloyId12 = { title: "Show alert" };
        if (false) {
          __alloyId12.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId11"] = e.menu.add(_.pick(__alloyId12, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId11"]) {
          $.__views["__alloyId11"].applyProperties(_.omit(__alloyId12, Alloy.Android.menuItemCreateArgs));
        }
        doClick ? $.addListener($.__views["__alloyId11"], 'click', doClick) : __defers['$.__views["__alloyId11"]!click!doClick'] = true;var __alloyId14 = { title: "Open Win2" };
        if (false) {
          __alloyId14.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId13"] = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId13"]) {
          $.__views["__alloyId13"].applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
        }
        openWin2 ? $.addListener($.__views["__alloyId13"], 'click', openWin2) : __defers['$.__views["__alloyId13"]!click!openWin2'] = true;$.__views["index"].activity.actionBar.title = "Title from menu";
      };
    } else {
      Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
      Ti.API.warn('or other UI component which does not have an Android activity.');
      Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
    }
  };
  $.__views["index"].addEventListener('open', __alloyId15);
  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick(e) {
    alert(e.source.title);
  }

  function openWin2(e) {
    Alloy.createController('win2').getView().open();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId11"]!click!doClick'] && $.addListener($.__views["__alloyId11"], 'click', doClick);__defers['$.__views["__alloyId13"]!click!openWin2'] && $.addListener($.__views["__alloyId13"], 'click', openWin2);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;