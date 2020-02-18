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
  Alloy.Collections.instance('test');

  // <dataFunctions>
  var __alloyId8 = Alloy.Collections['test'] || test;function __alloyId9(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId9.opts || {};var models = __alloyId8.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId3 = models[i];__alloyId3.__transform = _.isFunction(__alloyId3.transform) ? __alloyId3.transform() : __alloyId3.toJSON();var __alloyId5 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId5);
      var __alloyId7 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: __alloyId3.__transform.username });

      __alloyId5.add(__alloyId7);
    }$.__views["__alloyId2"].setData(rows);};__alloyId8.on('fetch destroy change add remove reset', __alloyId9);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId2"] = Ti.UI.createTableView(
  {});

  $.__views["index"].add($.__views["__alloyId2"]);
  exports.destroy = function () {__alloyId8 && __alloyId8.off('fetch destroy change add remove reset', __alloyId9);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Collections.test.fetch();

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