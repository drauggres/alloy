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
  { backgroundColor: "#eee", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["label"] = Ti.UI.createLabel(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { color: "#222", font: { fontSize: "28dp", fontWeight: "bold" }, textAlign: "center", height: Ti.UI.SIZE, width: Ti.UI.SIZE, top: "15dp" });
    if (Alloy.isHandheld) Alloy.deepExtend(true, o, { color: "#a00" });
    Alloy.deepExtend(true, o, { text: 'static label', id: "label" });
    return o;
  }());

  $.__views["index"].add($.__views["label"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  // add the dynamically created style to new labels
  var labels = [];
  for (var i = 0; i < 4; i++) {
    // generate and print the style based on the current controller, the attributes
    // of the style, and any additional properties we want to add
    var theStyle = Alloy.createStyle('index', {
      // used by createStyle() to merge styles
      apiName: 'Label',
      classes: ['blue', 'shadow'],
      id: 'label' + (i + 1),

      // additional properties to be merged in a final step
      textAlign: 'left',
      text: 'I\'m ugly, but styled dynamically!' });


    // in practice you wouldn't make multiple copies of a UI component with the
    // same id attribute, but this is just
    var label = Ti.UI.createLabel(theStyle);
    labels.push(label);
    $.index.add(label);
  }

  // run unit tests
  try {
    require('specs/index')($, {
      labels: labels });

  } catch (e) {
    Ti.API.warn('No unit tests for controller "index"');
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map