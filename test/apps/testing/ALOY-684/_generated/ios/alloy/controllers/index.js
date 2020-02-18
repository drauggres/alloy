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
  addNewLabel ? $.addListener($.__views["index"], 'click', addNewLabel) : __defers['$.__views["index"]!click!addNewLabel'] = true;$.__views["staticLabel"] = Ti.UI.createLabel(
  { color: "#a00", font: { fontSize: "32dp", fontWeight: "bold" }, textAlign: "center", top: "15dp", shadowColor: "#aaa", shadowOffset: { x: 2, y: 2 }, text: 'static text', id: "staticLabel" });

  $.__views["index"].add($.__views["staticLabel"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var ctr = 0;
  var classes = [
  [],
  ['big'],
  ['blue'],
  'shadow',
  ['shadow'],
  ['shadow', 'big'],
  ['big', 'shadow'],
  ['big', 'blue', 'shadow'],
  'big blue shadow'];


  function addNewLabel(e) {
    var index = ctr % classes.length;

    // Alloy.createView() for creating new titanium view proxies with a
    // given set of style attributes to determine which styles should be
    // applied.
    var label = Alloy.UI.create(
    // the name of the controller from which to reference styles
    'index',

    // The Titanium API to use for the creation. In this case we use "Label"
    // but the full "Ti.UI.Label" would work as well. Like in the XML,
    // implicit namespaces and defaults will be checked if an explicit
    // namespace is not given.
    'Label',

    // The 2nd parameter is an object that holds style information, like id
    // and classes, as well as the typical parameters you would pass to a
    // Titanium proxy. This allows the creation and property application to
    // be done in a single command, making for the best runtime performance.
    {
      // style attributes
      classes: classes[index],
      id: 'newLabel' + (ctr + 1),

      // basic proxy properties that apply to Label
      text: 'this is label #' + (ctr + 1),
      touchEnabled: false });



    $.index.add(label);
    ctr++;
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!click!addNewLabel'] && $.addListener($.__views["index"], 'click', addNewLabel);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map