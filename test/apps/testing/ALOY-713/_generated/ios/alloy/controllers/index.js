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


  // <dataFunctions>
  var __alloyId29 = Alloy.Collections['feed'] || feed;function __alloyId30(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId30.opts || {};var models = __alloyId29.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId2 = models[i];__alloyId2.__transform = _.isFunction(__alloyId2.transform) ? __alloyId2.transform() : __alloyId2.toJSON();var __alloyId4 = Ti.UI.createTableViewRow(
      { height: 200 });

      rows.push(__alloyId4);
      var __alloyId6 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "first", align: "left", left: 10 });

      __alloyId4.add(__alloyId6);
      if (true) {
        var __alloyId9 = [];var __alloyId13 = { title: "TAB1" };
        __alloyId9.push(__alloyId13);var __alloyId14 = { title: __alloyId2.__transform.fourth };
        __alloyId9.push(__alloyId14);var __alloyId15 = { title: "TAB3" };
        __alloyId9.push(__alloyId15);var __alloyId16 = Ti.UI.createTabbedBar(
        { labels: __alloyId9, left: 50, top: 10 });

        __alloyId4.add(__alloyId16);
      }
      var __alloyId18 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId18);
      var __alloyId20 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "second" });

      __alloyId18.add(__alloyId20);
      var __alloyId22 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId22);
      var __alloyId24 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "third" });

      __alloyId22.add(__alloyId24);
      var __alloyId26 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId26);
      var __alloyId28 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "fourth" });

      __alloyId26.add(__alloyId28);
    }$.__views["__alloyId1"].setData(rows);};__alloyId29.on('fetch destroy change add remove reset', __alloyId30);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { layout: "horizontal", backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createView(
  { backgroundColor: "white" });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createTableView(
  { top: 10, separatorColor: "#ffffff", height: 600 });

  $.__views["__alloyId0"].add($.__views["__alloyId1"]);
  exports.destroy = function () {__alloyId29 && __alloyId29.off('fetch destroy change add remove reset', __alloyId30);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  Alloy.Collections.feed.trigger('change');

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;