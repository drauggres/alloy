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
  { backgroundColor: "#efefef", fullscreen: false, exitOnClose: true, layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["labelNoAutoStyle"] = Ti.UI.createLabel(
  { color: "#88f", height: Ti.UI.SIZE, width: Ti.UI.SIZE, font: { fontSize: "24dp", fontWeight: "bold" }, right: null, left: null, bottom: null, top: "15dp", textAlign: "center", shadowOffset: { x: 2, y: 2 }, shadowColor: "#222", text: '["blueshadow"]', id: "labelNoAutoStyle" });

  $.__views["index"].add($.__views["labelNoAutoStyle"]);
  $.__views["labelAutoStyle"] = Ti.UI.createLabel(
  { color: "#a00", height: Ti.UI.SIZE, width: Ti.UI.SIZE, font: { fontSize: "24dp", fontWeight: "bold" }, right: null, left: null, bottom: null, top: "15dp", textAlign: "center", backgroundColor: "#999", text: '["red","greyBg"]', apiName: "Ti.UI.Label", id: "labelAutoStyle", classes: ["red", "greyBg"] });

  $.__views["index"].add($.__views["labelAutoStyle"]);
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // Need to set initial apiName and classes manually on $.labelNoAutoStyle
  // because, by default, autoStyle is not enabled
  $.labelNoAutoStyle.apiName = 'Label';
  $.labelNoAutoStyle.classes = ['blueshadow'];

  var labels = [
  {
    label: $.labelNoAutoStyle,
    classes: ['huge'] },

  {
    label: $.labelAutoStyle,
    classes: ['huge'] },

  {
    label: $.UI.create('Label', {
      classes: ['tiny'],
      text: '["tiny"]' }),

    classes: ['right', 'greyBg'] },

  {
    label: $.UI.create('Label', {
      classes: ['red'],
      text: '["red"]' }),

    classes: ['left', 'blueshadow'] },

  {
    label: Ti.UI.createLabel({
      text: '[]',
      apiName: 'Label' }),

    classes: ['bigspace', 'red', 'huge'] }];



  _.each(labels, function (o, index) {
    var label = o.label,
    classes = o.classes;

    label.addEventListener('click', function (e) {
      label._wasClicked = typeof label._wasClicked === 'undefined' ?
      false : !label._wasClicked;
      if (label._wasClicked) {
        Ti.API.info('remove: ' + JSON.stringify(classes) + ' from ' +
        JSON.stringify(label.classes));
        $.removeClass(label, classes);
      } else {
        Ti.API.info('add: ' + JSON.stringify(classes) + ' to ' +
        JSON.stringify(label.classes));
        $.addClass(label, classes);
      }
      label.text = JSON.stringify(label.classes);
    });
    if (index > 1) {
      $.index.add(label);
    }
  });

  $.index.open();

  try {
    $.tester = $.UI.create('Label');
    require('specs/index')($);
  } catch (e) {
    Ti.API.warn('No unit tests found for controller "index"');
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;