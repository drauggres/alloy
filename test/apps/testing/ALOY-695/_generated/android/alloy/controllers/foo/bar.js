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
  this.__controllerPath = 'foo/bar';
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
  $.__views["bar"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, layout: "vertical", id: "bar" });

  $.__views["bar"] && $.addTopLevelView($.__views["bar"]);
  addNewLabel ? $.addListener($.__views["bar"], 'click', addNewLabel) : __defers['$.__views["bar"]!click!addNewLabel'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var ctr = 0;
  function addNewLabel(e) {
    var index = ctr % Alloy.Globals.classes.length;
    var label = $.UI.create('Label', {
      classes: Alloy.Globals.classes[index],
      id: 'newLabel' + (ctr + 1),
      text: 'this is label #' + (ctr + 1),
      touchEnabled: false });


    $.bar.add(label);
    ctr++;
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["bar"]!click!addNewLabel'] && $.addListener($.__views["bar"], 'click', addNewLabel);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/foo/bar.js.map