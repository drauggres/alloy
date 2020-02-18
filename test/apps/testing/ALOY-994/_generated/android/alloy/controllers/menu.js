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
  this.__controllerPath = 'menu';
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
  const __alloyId15 = () => {
    __parentSymbol.removeEventListener('open', __alloyId15);
    if (__parentSymbol.activity) {
      __parentSymbol.activity.onCreateOptionsMenu = e => {
        var __alloyId12 = { title: "require 1", icon: "/ic_menu_goto.png" };
        if (false) {
          __alloyId12.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId11"] = e.menu.add(_.pick(__alloyId12, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId11"]) {
          $.__views["__alloyId11"].applyProperties(_.omit(__alloyId12, Alloy.Android.menuItemCreateArgs));
        }
        doClick ? $.addListener($.__views["__alloyId11"], 'click', doClick) : __defers['$.__views["__alloyId11"]!click!doClick'] = true;var __alloyId14 = { title: "require 2", icon: "/ic_menu_manage.png" };
        if (false) {
          __alloyId14.actionView = false;
        }
        if (e.menu) {
          $.__views["__alloyId13"] = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
        }
        if ($.__views["__alloyId13"]) {
          $.__views["__alloyId13"].applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
        }
        doClick ? $.addListener($.__views["__alloyId13"], 'click', doClick) : __defers['$.__views["__alloyId13"]!click!doClick'] = true;
      };
    } else {
      Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
      Ti.API.warn('or other UI component which does not have an Android activity.');
      Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
    }
  };
  __parentSymbol.addEventListener('open', __alloyId15);
  $.__views["menu"] && $.addTopLevelView($.__views["menu"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick(e) {
    alert(e.source.title);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId11"]!click!doClick'] && $.addListener($.__views["__alloyId11"], 'click', doClick);__defers['$.__views["__alloyId13"]!click!doClick'] && $.addListener($.__views["__alloyId13"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;