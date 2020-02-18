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
  var __alloyId6 = Alloy.Collections['collection'] || collection;function __alloyId7(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId7.opts || {};var models = filterCollection(__alloyId6);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId1 = models[i];__alloyId1.__transform = transformCollection(__alloyId1);var __alloyId3 = Ti.UI.createTableViewRow(
      { backgroundColor: "#efefef", height: "60dp" });

      rows.push(__alloyId3);
      var __alloyId5 = Ti.UI.createLabel(
      { textAlign: "left", color: "#181818", font: { fontSize: "32dp", fontWeight: "bold" }, touchEnabled: false, text: __alloyId1.__transform.text });

      __alloyId3.add(__alloyId5);
    }$.__views["__alloyId0"].setData(rows);};__alloyId6.on('fetch destroy change add remove reset', __alloyId7);exports.destroy = function () {__alloyId6 && __alloyId6.off('fetch destroy change add remove reset', __alloyId7);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function filterCollection(collection) {
    return collection.filter(function (model) {
      return model.get('text').split(/\s+/)[1] % 2;
    });
  }

  function transformCollection(model) {
    var o = model.toJSON();
    o.text = '### ' + o.text + ' ###';
    return o;
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