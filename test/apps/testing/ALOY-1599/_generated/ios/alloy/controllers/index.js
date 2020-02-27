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
  Alloy.Models.instance('Big');Alloy.Models.instance('small');

  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", layout: "vertical", exitOnClose: true, fullscreen: false, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["lbl1"] = Ti.UI.createLabel(
  { id: "lbl1" });

  $.__views["index"].add($.__views["lbl1"]);
  $.__views["lbl2"] = Ti.UI.createLabel(
  { id: "lbl2" });

  $.__views["index"].add($.__views["lbl2"]);
  this.__alloyId4 = function () {
    Alloy['Models']['Big'].__transform = _.isFunction(Alloy['Models']['Big'].transform) ? Alloy['Models']['Big'].transform() : Alloy['Models']['Big'].toJSON();this.lbl1.text = Alloy['Models']['Big']['__transform']['name'];
  }.bind(this);
  Alloy['Models']['Big'].on('fetch change destroy', this.__alloyId4);this.__alloyId5 = function () {
    Alloy['Models']['small'].__transform = _.isFunction(Alloy['Models']['small'].transform) ? Alloy['Models']['small'].transform() : Alloy['Models']['small'].toJSON();this.lbl2.text = Alloy['Models']['small']['__transform']['name'];
  }.bind(this);
  Alloy['Models']['small'].on('fetch change destroy', this.__alloyId5);exports.destroy = function () {Alloy['Models']['Big'] && Alloy['Models']['Big'].off('fetch change destroy', this.__alloyId4);Alloy['Models']['small'] && Alloy['Models']['small'].off('fetch change destroy', this.__alloyId5);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Models.instance('Big').set({ name: 'Big!' });
  Alloy.Models.instance('small').set({ name: 'small!' });

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