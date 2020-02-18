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


  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["win2"] = Ti.UI.createWindow(
  { backgroundColor: "#000", id: "win2" });

  $.__views["win2"] && $.addTopLevelView($.__views["win2"]);
  const __alloyId17 = () => {
    $.__views["win2"].removeEventListener('open', __alloyId17);
    if ($.__views["win2"].activity) {
      $.__views["win2"].activity.actionBar.backgroundImage = "/actionbackground.png";$.__views["win2"].activity.actionBar.displayHomeAsUp = true;$.__views["win2"].activity.actionBar.icon = "/actionicon.png";$.__views["win2"].activity.actionBar.onHomeIconItemSelected = doHomeIcon;
    } else {
      Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
      Ti.API.warn('UI component which does not have an Android activity. Android Activities');
      Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
    }
  };
  $.__views["win2"].addEventListener('open', __alloyId17);
  const __alloyId23 = () => {
    $.__views["win2"].removeEventListener('open', __alloyId23);
    if ($.__views["win2"].activity) {
      $.__views["win2"].activity.onCreateOptionsMenu = e => {
        var __alloyId20 = { title: "require 1", icon: "/ic_menu_goto.png" };
        if (false) {
          __alloyId20.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId19"] = e.menu.add(_.pick(__alloyId20, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId19"]) {
          $.__views["__alloyId19"].applyProperties(_.omit(__alloyId20, Alloy.Android.menuItemCreateArgs));
        }
        doClick ? $.addListener($.__views["__alloyId19"], 'click', doClick) : __defers['$.__views["__alloyId19"]!click!doClick'] = true;var __alloyId22 = { title: "require 2", icon: "/ic_menu_manage.png" };
        if (false) {
          __alloyId22.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId21"] = e.menu.add(_.pick(__alloyId22, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId21"]) {
          $.__views["__alloyId21"].applyProperties(_.omit(__alloyId22, Alloy.Android.menuItemCreateArgs));
        }
        doClick ? $.addListener($.__views["__alloyId21"], 'click', doClick) : __defers['$.__views["__alloyId21"]!click!doClick'] = true;
      };
    } else {
      Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
      Ti.API.warn('or other UI component which does not have an Android activity.');
      Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
    }
  };
  $.__views["win2"].addEventListener('open', __alloyId23);
  $.__views["__alloyId24"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Window 2' });

  $.__views["win2"].add($.__views["__alloyId24"]);
  $.__views["__alloyId25"] = Ti.UI.createLabel(
  { color: "#fff", font: { fontSize: "18dp", fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE, text: 'Press the menu button', bottom: "20dp" });

  $.__views["win2"].add($.__views["__alloyId25"]);
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

  function doClick(e) {
    alert(e.source.title);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId19"]!click!doClick'] && $.addListener($.__views["__alloyId19"], 'click', doClick);__defers['$.__views["__alloyId21"]!click!doClick'] && $.addListener($.__views["__alloyId21"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;