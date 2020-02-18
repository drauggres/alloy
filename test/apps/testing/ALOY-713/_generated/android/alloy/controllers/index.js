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
  { layout: "horizontal", backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createView(
  { backgroundColor: "white", id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createTableView(
  { top: 10, separatorColor: "#ffffff", height: 600, id: "__alloyId1" });

  $.__views["__alloyId0"].add($.__views["__alloyId1"]);
  var __alloyId19 = Alloy.Collections['feed'] || feed;function __alloyId20(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId20.opts || {};var models = __alloyId19.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId2 = models[i];__alloyId2.__transform = _.isFunction(__alloyId2.transform) ? __alloyId2.transform() : __alloyId2.toJSON();var __alloyId4 = Ti.UI.createTableViewRow(
      { height: 200 });

      rows.push(__alloyId4);
      var __alloyId6 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "first", align: "left", left: 10 });

      __alloyId4.add(__alloyId6);
      var __alloyId8 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId8);
      var __alloyId10 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "second" });

      __alloyId8.add(__alloyId10);
      var __alloyId12 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId12);
      var __alloyId14 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "third" });

      __alloyId12.add(__alloyId14);
      var __alloyId16 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId16);
      var __alloyId18 = Ti.UI.createLabel(
      { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", text: "fourth" });

      __alloyId16.add(__alloyId18);
    }$.__views["__alloyId1"].setData(rows);};__alloyId19.on('fetch destroy change add remove reset', __alloyId20);exports.destroy = function () {__alloyId19 && __alloyId19.off('fetch destroy change add remove reset', __alloyId20);};

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map