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
  $.demo = Alloy.createCollection('Demo');

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createScrollView(
  { layout: "vertical", id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  var __alloyId4 = Alloy.Collections['$.demo'] || $.demo;function __alloyId5(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId5.opts || {};var models = __alloyId4.models;var len = models.length;var children = $.__views["__alloyId0"].children;for (var d = children.length - 1; d >= 0; d--) {$.__views["__alloyId0"].remove(children[d]);}for (var i = 0; i < len; i++) {var __alloyId1 = models[i];__alloyId1.__transform = _.isFunction(__alloyId1.transform) ? __alloyId1.transform() : __alloyId1.toJSON();var __alloyId3 = Alloy.createController('products', { $model: __alloyId1, __parentSymbol: $.__views["__alloyId0"] });
      __alloyId3.setParent($.__views["__alloyId0"]);
      doSomething ? __alloyId3.on('click', doSomething) : __defers['__alloyId3!click!doSomething'] = true;}};__alloyId4.on('fetch destroy change add remove reset', __alloyId5);exports.destroy = function () {__alloyId4 && __alloyId4.off('fetch destroy change add remove reset', __alloyId5);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doSomething() {
    console.log('Congratulations! It works!');
  }

  var demoModel = Alloy.createModel('Demo');
  $.demo.add(demoModel);

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['__alloyId3!click!doSomething'] && __alloyId3.on('click', doSomething);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map