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
  var __alloyId0 = [];$.__views["__alloyId2"] = Ti.UI.createWindow(
  { title: "tab 1", backgroundColor: "#fff" });

  $.__views["__alloyId1"] = Ti.UI.createTab(
  { window: $.__views["__alloyId2"], title: "tab 1" });

  __alloyId0.push($.__views["__alloyId1"]);$.__views["__alloyId4"] = Ti.UI.createWindow(
  { title: "tab 2", backgroundColor: "#fff" });

  $.__views["__alloyId3"] = Ti.UI.createTab(
  { window: $.__views["__alloyId4"], title: "tab 2" });

  __alloyId0.push($.__views["__alloyId3"]);$.__views["ScheduleGroup"] = Ti.UI.createTabGroup(
  { tabs: __alloyId0, id: "ScheduleGroup", activeTabIconTint: "yellow", tabsBackgroundSelectedColor: "yellow" });

  if (true) {
    const __alloyId7 = () => {
      $.__views["ScheduleGroup"].removeEventListener('open', __alloyId7);
      if ($.__views["ScheduleGroup"].activity) {
        $.__views["ScheduleGroup"].activity.onCreateOptionsMenu = e => {
          var __alloyId5 = { id: "refreshMenuItem", title: "Refresh", showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM, itemId: 1 };
          if (false) {
            __alloyId5.actionView = false;
          }
          if (e.menu) {
            $.__views["refreshMenuItem"] = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["refreshMenuItem"]) {
            $.__views["refreshMenuItem"].applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
          }
          doRefresh ? $.addListener($.__views["refreshMenuItem"], 'click', doRefresh) : __defers['$.__views["refreshMenuItem"]!click!doRefresh'] = true;var __alloyId6 = { id: "settingsMenuItem", title: "Settings", showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM, itemId: 0 };
          if (false) {
            __alloyId6.actionView = false;
          }
          if (e.menu) {
            $.__views["settingsMenuItem"] = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
          }
          if ($.__views["settingsMenuItem"]) {
            $.__views["settingsMenuItem"].applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
          }
          doSettingsMenuItem ? $.addListener($.__views["settingsMenuItem"], 'click', doSettingsMenuItem) : __defers['$.__views["settingsMenuItem"]!click!doSettingsMenuItem'] = true;
        };
      } else {
        Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
        Ti.API.warn('or other UI component which does not have an Android activity.');
        Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
      }
    };
    $.__views["ScheduleGroup"].addEventListener('open', __alloyId7);
  }
  $.__views["ScheduleGroup"] && $.addTopLevelView($.__views["ScheduleGroup"]);
  doOnOpen ? $.addListener($.__views["ScheduleGroup"], 'open', doOnOpen) : __defers['$.__views["ScheduleGroup"]!open!doOnOpen'] = true;doOnFocus ? $.addListener($.__views["ScheduleGroup"], 'focus', doOnFocus) : __defers['$.__views["ScheduleGroup"]!focus!doOnFocus'] = true;exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doOnOpen() {
    Ti.API.info('doOnOpen');
  }

  function doOnFocus() {
    Ti.API.info('doOnFocus');
  }

  function doSettingsMenuItem() {
    Ti.API.info('doSettingsMenuItem');
  }

  function doRefresh() {
    Ti.API.info('doRefresh');
  }

  $.ScheduleGroup.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["refreshMenuItem"]!click!doRefresh'] && $.addListener($.__views["refreshMenuItem"], 'click', doRefresh);__defers['$.__views["settingsMenuItem"]!click!doSettingsMenuItem'] && $.addListener($.__views["settingsMenuItem"], 'click', doSettingsMenuItem);__defers['$.__views["ScheduleGroup"]!open!doOnOpen'] && $.addListener($.__views["ScheduleGroup"], 'open', doOnOpen);__defers['$.__views["ScheduleGroup"]!focus!doOnFocus'] && $.addListener($.__views["ScheduleGroup"], 'focus', doOnFocus);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;