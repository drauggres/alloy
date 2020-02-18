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
  var __alloyId8 = Alloy.Collections['test'] || test;function renderTablet(e) {if (e && e.fromAdapter) {return;}var opts = renderTablet.opts || {};var models = __alloyId8.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId3 = models[i];__alloyId3.__transform = _.isFunction(__alloyId3.transform) ? __alloyId3.transform() : __alloyId3.toJSON();var __alloyId5 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId5);
      var __alloyId7 = Ti.UI.createLabel(
      { left: 5, text: __alloyId3.__transform.username, color: "red" });

      __alloyId5.add(__alloyId7);
    }$.__views["__alloyId2"].setData(rows);};__alloyId8.on('fetch destroy change add remove reset', renderTablet);var __alloyId15 = Alloy.Collections['test'] || test;function renderHandheld(e) {if (e && e.fromAdapter) {return;}var opts = renderHandheld.opts || {};var models = __alloyId15.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId10 = models[i];__alloyId10.__transform = _.isFunction(__alloyId10.transform) ? __alloyId10.transform() : __alloyId10.toJSON();var __alloyId12 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId12);
      var __alloyId14 = Ti.UI.createLabel(
      { left: 5, text: __alloyId10.__transform.username, color: "blue" });

      __alloyId12.add(__alloyId14);
    }$.__views["__alloyId9"].setData(rows);};__alloyId15.on('fetch destroy change add remove reset', renderHandheld);
  // </dataFunctionsCode>

  // Generated UI code
  if (true && Alloy.isTablet) {
    $.__views["index"] = Ti.UI.createWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
    $.__views["__alloyId2"] = Ti.UI.createTableView(
    { top: 20 });

    $.__views["index"].add($.__views["__alloyId2"]);
  }
  if (true && !Alloy.isTablet) {
    $.__views["index"] = Ti.UI.createWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

    $.__views["index"] && $.addTopLevelView($.__views["index"]);
    $.__views["__alloyId9"] = Ti.UI.createTableView(
    { top: 20 });

    $.__views["index"].add($.__views["__alloyId9"]);
  }
  exports.destroy = function () {__alloyId8 && Alloy.isTablet && __alloyId8.off('fetch destroy change add remove reset', renderTablet);__alloyId15 && Alloy.isHandheld && __alloyId15.off('fetch destroy change add remove reset', renderHandheld);};
  function render() {if (Alloy.isTablet) {renderTablet();}if (Alloy.isHandheld) {renderHandheld();}}

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Ti.API.info('aloy1127: ' + Ti.App.Properties.hasProperty('aloy1127'));
  if (!Ti.App.Properties.hasProperty('aloy1127')) {
    for (var i = 1, j = 7; i < j; i++) {
      Alloy.createModel('test', { username: 'User ' + i }).save();
    }
    Ti.App.Properties.setString('aloy1127', 'yes');
  }

  Alloy.Collections.test.fetch();

  $.index.addEventListener('open', function () {
    $.destroy();
  });

  $.index.open();

  render();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;