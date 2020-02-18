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
  var __alloyId7 = Alloy.Collections['test'] || test;function render(e) {if (e && e.fromAdapter) {return;}var opts = render.opts || {};var models = __alloyId7.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId2 = models[i];__alloyId2.__transform = _.isFunction(__alloyId2.transform) ? __alloyId2.transform() : __alloyId2.toJSON();var __alloyId4 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId4);
      var __alloyId6 = Ti.UI.createView(
      {});

      __alloyId4.add(__alloyId6);
    }$.__views["content"].setData(rows);};__alloyId7.on('fetch destroy change add remove reset', render);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true || false) {
    $.__views["content"] = Ti.UI.createTableView(
    { id: "content" });

    $.__views["index"].add($.__views["content"]);
  }
  exports.destroy = function () {__alloyId7 && __alloyId7.off('fetch destroy change add remove reset', render);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  render();

  $.destroy();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;