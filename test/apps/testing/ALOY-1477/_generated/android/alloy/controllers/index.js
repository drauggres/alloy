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
  Alloy.Models.instance('mymodel');Alloy.Collections.instance('mymodel');

  // <dataFunctions>
  var __alloyId12 = Alloy.Collections['mymodel'] || mymodel;function __alloyId13(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId13.opts || {};var models = __alloyId12.models;var len = models.length;var __alloyId8 = [];for (var i = 0; i < len; i++) {var __alloyId9 = models[i];__alloyId9.__transform = _.isFunction(__alloyId9.transform) ? __alloyId9.transform() : __alloyId9.toJSON();var __alloyId11 = { properties: { title: __alloyId9.__transform.id + ' - ' + __alloyId9.__transform.title } };__alloyId8.push(__alloyId11);}opts.animation ? $.__views["__alloyId7"].setItems(__alloyId8, opts.animation) : $.__views["__alloyId7"].setItems(__alloyId8);};__alloyId12.on('fetch destroy change add remove reset', __alloyId13);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { top: 30 });

  $.__views["index"].add($.__views["__alloyId4"]);
  $.__views["__alloyId5"] = Ti.UI.createButton(
  { title: 'Create Model Should Not Error' });

  $.__views["index"].add($.__views["__alloyId5"]);
  createModel ? $.addListener($.__views["__alloyId5"], 'click', createModel) : __defers['$.__views["__alloyId5"]!click!createModel'] = true;$.__views["__alloyId7"] = Ti.UI.createListSection(
  {});

  var __alloyId14 = [];__alloyId14.push($.__views["__alloyId7"]);$.__views["__alloyId6"] = Ti.UI.createListView(
  { sections: __alloyId14 });

  $.__views["index"].add($.__views["__alloyId6"]);
  this.__alloyId15 = function () {
    Alloy['Models']['mymodel'].__transform = _.isFunction(Alloy['Models']['mymodel'].transform) ? Alloy['Models']['mymodel'].transform() : Alloy['Models']['mymodel'].toJSON();this.__alloyId4.text = Alloy['Models']['mymodel']['__transform']['id'] + ' - ' + Alloy['Models']['mymodel']['__transform']['title'];
  }.bind(this);
  Alloy['Models']['mymodel'].on('fetch change destroy', this.__alloyId15);exports.destroy = function () {__alloyId12 && __alloyId12.off('fetch destroy change add remove reset', __alloyId13);Alloy['Models']['mymodel'] && Alloy['Models']['mymodel'].off('fetch change destroy', this.__alloyId15);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Models.mymodel.set({
    id: 0,
    title: 'mod TITLE' });


  Alloy.Collections.mymodel.reset([{
    id: 0,
    title: 'col TITLE' }]);


  $.index.open();

  function createModel() {
    Alloy.Collections.mymodel.create({
      title: 'crt TITLE' });

  }

  // runtime unit tests
  if (!false) {
    $.createModel = createModel;
    require('specs/index')($);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId5"]!click!createModel'] && $.addListener($.__views["__alloyId5"], 'click', createModel);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;