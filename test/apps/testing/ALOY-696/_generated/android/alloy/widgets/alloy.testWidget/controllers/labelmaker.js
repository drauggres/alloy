var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'alloy.testWidget/' + s :
  s.substring(0, index) + '/alloy.testWidget/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/widget'))('alloy.testWidget');this.__widgetId = 'alloy.testWidget';
  require('/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'labelmaker';
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
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  exports.createLabels = function () {
    var container = $.UI.create('View', {
      classes: 'container' });

    container.add(Ti.UI.createLabel(Alloy.createStyle(
    {
      widgetId: 'alloy.testWidget',
      name: 'labelmaker' },

    {
      apiName: 'Ti.UI.Label',
      text: 'Alloy.createStyle() + Ti.UI.createLabel()' })));



    container.add(Ti.UI.createLabel($.createStyle({
      apiName: 'Ti.UI.Label',
      text: '$.createStyle() + Ti.UI.createLabel()' })));


    container.add(Alloy.UI.create(
    {
      widgetId: 'alloy.testWidget',
      name: 'labelmaker' },

    'Ti.UI.Label',
    {
      text: 'Alloy.UI.create()' }));



    container.add($.UI.create('Ti.UI.Label', {
      text: '$.UI.create()' }));


    return container;
  };

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;