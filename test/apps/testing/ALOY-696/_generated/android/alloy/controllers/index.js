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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  addLabels ? $.addListener($.__views["index"], 'click', addLabels) : __defers['$.__views["index"]!click!addLabels'] = true;$.__views["scroller"] = Ti.UI.createScrollView(
  { layout: "vertical", height: Ti.UI.FILL, width: Ti.UI.FILL, id: "scroller" });

  $.__views["index"].add($.__views["scroller"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function addLabels(e) {
    $.scroller.add(Ti.UI.createLabel(Alloy.createStyle('index', {
      apiName: 'Ti.UI.Label',
      text: 'Alloy.createStyle() + Ti.UI.createLabel()' })));


    $.scroller.add(Ti.UI.createLabel($.createStyle({
      apiName: 'Ti.UI.Label',
      text: '$.createStyle() + Ti.UI.createLabel()' })));


    $.scroller.add(Alloy.UI.create('index', 'Ti.UI.Label', {
      text: 'Alloy.UI.create()' }));


    $.scroller.add($.UI.create('Ti.UI.Label', {
      text: '$.UI.create()' }));


    $.scroller.add(Alloy.createWidget('alloy.testWidget', 'labelmaker').createLabels());
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!click!addLabels'] && $.addListener($.__views["index"], 'click', addLabels);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map