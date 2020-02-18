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
  Alloy.Collections.instance('pins');

  // <dataFunctions>
  var __alloyId5 = Alloy.Collections['pins'] || pins;function __alloyId6(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId6.opts || {};var models = __alloyId5.models;var len = models.length;for (var i = 0; i < len; i++) {var __alloyId4 = models[i];__alloyId2.push(require('ti.map').createAnnotation(_.isFunction(__alloyId4.transform) ? __alloyId4.transform() : __alloyId4.toJSON()));}$.__views["map"].annotations = __alloyId2;};__alloyId5.on('fetch destroy change add remove reset', __alloyId6);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId2 = [];
  $.__views["__alloyId3"] = require("ti.map").createAnnotation(
  { latitude: 37.39, longitude: -122.051, title: "XML Annotation" });

  __alloyId2.push($.__views["__alloyId3"]);
  $.__views["map"] = require("ti.map").createView(
  { userLocation: false, animate: true, region: { latitude: 37.3892876, latitudeDelta: 0.015, longitude: -122.0502364, longitudeDelta: 0.015 }, annotations: __alloyId2, id: "map" });

  $.__views["index"].add($.__views["map"]);
  exports.destroy = function () {__alloyId5 && __alloyId5.off('fetch destroy change add remove reset', __alloyId6);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  if (!Ti.App.Properties.hasProperty('seeded')) {
    var pins = [
    { title: 'Appcelerator', latitude: 37.3892876, longitude: -122.0502364 },
    { title: 'SETI Institute', latitude: 37.386697, longitude: -122.052028 },
    { title: 'Someplace nearby', latitude: 37.3880608, longitude: -122.0559039 }];

    for (var i = 0, j = pins.length; i < j; i++) {
      Alloy.createModel('pins', {
        title: pins[i].title,
        latitude: pins[i].latitude,
        longitude: pins[i].longitude }).
      save();
    }
    Ti.App.Properties.setString('seeded', 'yuppers');
  }

  Alloy.Collections.pins.fetch();

  function doTransform(model) {
    var transform = model.toJSON();
    transform.title = '[' + transform.title + ']';
    return transform;
  }

  function doFilter(collection) {
    return collection.where({ title: 'Appcelerator' });
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