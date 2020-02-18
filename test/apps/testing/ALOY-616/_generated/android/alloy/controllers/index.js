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
  { backgroundColor: "white", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["starwidget"] = Alloy.createWidget('starrating', 'widget', { id: "starwidget", max: 5, initialRating: 2.5, top: 20, __parentSymbol: $.__views["index"] });
  $.__views["starwidget"].setParent($.__views["index"]);
  $.__views["label"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: 'Tap for random number', id: "label" });

  $.__views["index"].add($.__views["label"]);
  doClick ? $.addListener($.__views["label"], 'click', doClick) : __defers['$.__views["label"]!click!doClick'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var util = require('util');
  var rand = require('random');

  function doClick(e) {
    alert(util.formatNumber(rand.getRandomNumber(12)));
  }

  function doFoo(num) {
    alert('Random ' + num + '-digit rating = ' + util.formatNumber(rand.getRandomNumber(num)));
  }
  $.starwidget.init(doFoo);


  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["label"]!click!doClick'] && $.addListener($.__views["label"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map