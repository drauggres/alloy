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
  Alloy.Collections.instance('fruits');Alloy.Collections.instance('colors');

  // <dataFunctions>
  var __alloyId7 = Alloy.Collections['fruits'] || fruits;function __alloyId8(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId8.opts || {};var models = __alloyId7.models;var len = models.length;var rows = [];
    _.each($.__views["column1"].getRows(), function (r) {$.__views["column1"].removeRow(r);});
    for (var i = 0; i < len; i++) {var __alloyId5 = models[i];__alloyId5.__transform = _.isFunction(__alloyId5.transform) ? __alloyId5.transform() : __alloyId5.toJSON();$.__views["__alloyId6"] = Ti.UI.createPickerRow(
      { title: __alloyId5.__transform.name });

      rows.push($.__views["__alloyId6"]);
    }_.each(rows, function (row) {$.__views["column1"].addRow(row);});};__alloyId7.on('fetch destroy change add remove reset', __alloyId8);var __alloyId11 = Alloy.Collections['colors'] || colors;function __alloyId12(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId12.opts || {};var models = __alloyId11.models;var len = models.length;var rows = [];
    _.each($.__views["column2"].getRows(), function (r) {$.__views["column2"].removeRow(r);});
    for (var i = 0; i < len; i++) {var __alloyId9 = models[i];__alloyId9.__transform = doTransform(__alloyId9);$.__views["__alloyId10"] = Ti.UI.createPickerRow(
      { title: __alloyId9.__transform.color });

      rows.push($.__views["__alloyId10"]);
    }_.each(rows, function (row) {$.__views["column2"].addRow(row);});};__alloyId11.on('fetch destroy change add remove reset', __alloyId12);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["picker"] = Ti.UI.createPicker(
  { id: "picker", top: 50, useSpinner: true });

  $.__views["index"].add($.__views["picker"]);
  var __alloyId4 = [];$.__views["column1"] = Ti.UI.createPickerColumn(
  { id: "column1" });

  __alloyId4.push($.__views["column1"]);
  $.__views["column2"] = Ti.UI.createPickerColumn(
  { id: "column2" });

  __alloyId4.push($.__views["column2"]);
  $.__views["picker"].add(__alloyId4);
  exports.destroy = function () {__alloyId7 && __alloyId7.off('fetch destroy change add remove reset', __alloyId8);__alloyId11 && __alloyId11.off('fetch destroy change add remove reset', __alloyId12);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var fruits = ['apple', 'banana', 'cherry', 'blueberry', 'orange', 'pear'];
  var colors = ['red', 'yellow', 'blue', 'orange', 'green', 'white'];
  for (var i = 1, j = fruits.length; i < j; i++) {
    Alloy.createModel('fruits', { name: fruits[i] }).save();
    Alloy.createModel('colors', { color: colors[i] }).save();
  }

  Alloy.Collections.fruits.fetch();
  Alloy.Collections.colors.fetch();

  function doTransform(model) {
    var transform = model.toJSON();
    transform.color = transform.color.toUpperCase();
    return transform;
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;