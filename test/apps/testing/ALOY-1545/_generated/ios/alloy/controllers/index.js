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

  // <dataFunctions>
  var __alloyId6 = Alloy.Collections['$.demo'] || $.demo;function __alloyId7(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId7.opts || {};var models = __alloyId6.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId1 = models[i];__alloyId1.__transform = _.isFunction(__alloyId1.transform) ? __alloyId1.transform() : __alloyId1.toJSON();var __alloyId3 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId3);
      var __alloyId5 = Alloy.createWidget('foo', 'widget', { $model: __alloyId1, __parentSymbol: __alloyId3 });
      __alloyId5.setParent(__alloyId3);
      onCustomEvent ? __alloyId5.on('customevent', onCustomEvent) : __defers['__alloyId5!customevent!onCustomEvent'] = true;}$.__views["__alloyId0"].setData(rows);};__alloyId6.on('fetch destroy change add remove reset', __alloyId7);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createTableView(
  {});

  $.__views["index"].add($.__views["__alloyId0"]);
  exports.destroy = function () {__alloyId6 && __alloyId6.off('fetch destroy change add remove reset', __alloyId7);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function onCustomEvent(e) {
    console.log('Congratulations! It works!');
  }

  var demoModel = Alloy.createModel('Demo');
  $.demo.add(demoModel);

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['__alloyId5!customevent!onCustomEvent'] && __alloyId5.on('customevent', onCustomEvent);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;