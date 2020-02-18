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
  { backgroundColor: "#efefef", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId0"] = Ti.UI.createTableView(
  { id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  var __alloyId10 = Alloy.Collections['collection'] || collection;function __alloyId11(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId11.opts || {};var models = __alloyId10.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId1 = models[i];__alloyId1.__transform = doUpper(__alloyId1);var __alloyId3 = Ti.UI.createTableViewRow(
      { backgroundColor: "#efefef", height: "60dp" });

      rows.push(__alloyId3);
      var __alloyId5 = Ti.UI.createLabel(
      { right: "68dp", textAlign: "left", height: Ti.UI.SIZE, top: "3dp", left: "10dp", color: "#181818", font: { fontSize: "28dp", fontWeight: "bold" }, text: '	' + __alloyId1.__transform.title });

      __alloyId3.add(__alloyId5);
      var __alloyId7 = Ti.UI.createLabel(
      { right: "68dp", textAlign: "left", height: Ti.UI.SIZE, bottom: "5dp", left: "15dp", color: "#777", font: { fontSize: "16dp", fontWeight: "normal" }, text: '		  ' + __alloyId1.__transform.subtitle });

      __alloyId3.add(__alloyId7);
      var __alloyId9 = Ti.UI.createImageView(
      { right: "10dp", height: "48dp", width: "48dp", image: __alloyId1.__transform.image });

      __alloyId3.add(__alloyId9);
    }$.__views["__alloyId0"].setData(rows);};__alloyId10.on('fetch destroy change add remove reset', __alloyId11);exports.destroy = function () {__alloyId10 && __alloyId10.off('fetch destroy change add remove reset', __alloyId11);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doUpper(model) {
    // Need to convert the model to a JSON object
    var transform = model.toJSON();
    transform.title = transform.title.toUpperCase();
    Ti.API.info('>>> transforming the title');
    return transform;
  }

  Alloy.Collections.collection.trigger('change');

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map