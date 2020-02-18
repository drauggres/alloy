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

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId0 = [];
  $.__views["__alloyId1"] = require("ti.map").createAnnotation(
  { latitude: 37.389569, longitude: -122.050212, title: "XML Annotation" });

  __alloyId0.push($.__views["__alloyId1"]);
  $.__views["annotation2"] = require("ti.map").createAnnotation(
  { title: "TSS Annotation", latitude: 37.392, longitude: -122.061, id: "annotation2" });

  __alloyId0.push($.__views["annotation2"]);
  $.__views["map"] = require("ti.map").createView(
  { userLocation: false, mapType: Alloy.Globals.Map.SATELLITE_TYPE, animate: true, region: { latitude: 37.38, latitudeDelta: 0.2, longitude: -122.05, longitudeDelta: 0.2 }, annotations: __alloyId0, id: "map" });

  $.__views["index"].add($.__views["map"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // add the iOS7-specific camera view
  if (false && parseInt(Ti.Platform.version, 10) >= 7) {
    var cam = Alloy.Globals.Map.createCamera({
      altitude: 300,
      centerCoordinate: {
        latitude: 37.389569,
        longitude: -122.050212 },

      heading: -45,
      pitch: 60,
      showsBuildings: true });

    var animCam = function () {
      $.map.removeEventListener('complete', animCam);
      $.map.animateCamera({
        camera: cam,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN,
        duration: 500 });

    };
    $.map.addEventListener('complete', animCam);
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