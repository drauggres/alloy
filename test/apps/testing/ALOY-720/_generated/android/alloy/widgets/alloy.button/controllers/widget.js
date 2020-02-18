var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'alloy.button/' + s :
  s.substring(0, index) + '/alloy.button/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/alloy/widget'))('alloy.button');this.__widgetId = 'alloy.button';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
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
  if (true) {
    var __alloyId0 = { id: "button" };
    if (false) {
      __alloyId0.actionView = false;
    }
    $.__views["button"] = __parentSymbol.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
    $.__views["button"].applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
    $.button = $.__views["button"];
    $.__views["button"] && $.addTopLevelView($.__views["button"]);
    doClick ? $.addListener($.__views["button"], 'click', doClick) : __defers['$.__views["button"]!click!doClick'] = true;}
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick(e) {
    $.trigger('click', e);
  }

  var args = arguments[0] || {};
  $.button.title = args.title || 'click me';

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["button"]!click!doClick'] && $.addListener($.__views["button"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/widgets/alloy.button/controllers/widget.js.map