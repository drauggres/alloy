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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["button1"] = Ti.UI.createButton(
  { title: 'Show View-based Popover', id: "button1", top: 250 });

  $.__views["index"].add($.__views["button1"]);
  openPopover ? $.addListener($.__views["button1"], 'click', openPopover) : __defers['$.__views["button1"]!click!openPopover'] = true;$.__views["button2"] = Ti.UI.createButton(
  { title: 'Show Window-based Popover', id: "button2", top: 50 });

  $.__views["index"].add($.__views["button2"]);
  openPopoverWin ? $.addListener($.__views["button2"], 'click', openPopoverWin) : __defers['$.__views["button2"]!click!openPopoverWin'] = true;$.__views["button3"] = Ti.UI.createButton(
  { title: 'Show NavigationWindow-based Popover', id: "button3", top: 50 });

  $.__views["index"].add($.__views["button3"]);
  openPopoverNavWin ? $.addListener($.__views["button3"], 'click', openPopoverNavWin) : __defers['$.__views["button3"]!click!openPopoverNavWin'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function openPopover() {
    var popover = Alloy.createController('popover').getView();
    popover.show({ view: $.button1 });
  }
  function openPopoverWin() {
    var popover = Alloy.createController('popover_win').getView();
    popover.show({ view: $.button2 });
  }
  function openPopoverNavWin() {
    var popover = Alloy.createController('popover_navwin').getView();
    popover.show({ view: $.button3 });
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["button1"]!click!openPopover'] && $.addListener($.__views["button1"], 'click', openPopover);__defers['$.__views["button2"]!click!openPopoverWin'] && $.addListener($.__views["button2"], 'click', openPopoverWin);__defers['$.__views["button3"]!click!openPopoverNavWin'] && $.addListener($.__views["button3"], 'click', openPopoverNavWin);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map