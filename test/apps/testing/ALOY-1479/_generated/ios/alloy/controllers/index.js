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
  Alloy.Models.instance('mymodel');$.modelinstance = Alloy.createModel('mymodel');Alloy.Collections.instance('mymodel');$.colinstance = Alloy.createCollection('mymodel');

  // <dataFunctions>
  var __alloyId14 = Alloy.Collections['mymodel'] || mymodel;function __alloyId15(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId15.opts || {};var models = __alloyId14.models;var len = models.length;var __alloyId10 = [];for (var i = 0; i < len; i++) {var __alloyId11 = models[i];__alloyId11.__transform = _.isFunction(__alloyId11.transform) ? __alloyId11.transform() : __alloyId11.toJSON();var __alloyId13 = { properties: { title: __alloyId11.__transform.foo, subtitle: __alloyId11.__transform.foo + ' ' + __alloyId11.__transform.bar + ' ' + __alloyId11.__transform.missing } };__alloyId10.push(__alloyId13);}opts.animation ? $.__views["__alloyId9"].setItems(__alloyId10, opts.animation) : $.__views["__alloyId9"].setItems(__alloyId10);};__alloyId14.on('fetch destroy change add remove reset', __alloyId15);var __alloyId23 = Alloy.Collections['$.colinstance'] || $.colinstance;function __alloyId24(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId24.opts || {};var models = __alloyId23.models;var len = models.length;var __alloyId19 = [];for (var i = 0; i < len; i++) {var __alloyId20 = models[i];__alloyId20.__transform = _.isFunction(__alloyId20.transform) ? __alloyId20.transform() : __alloyId20.toJSON();var __alloyId22 = { properties: { title: __alloyId20.__transform.foo, subtitle: __alloyId20.__transform.foo + ' ' + __alloyId20.__transform.bar + ' ' + __alloyId20.__transform.missing } };__alloyId19.push(__alloyId22);}opts.animation ? $.__views["__alloyId18"].setItems(__alloyId19, opts.animation) : $.__views["__alloyId18"].setItems(__alloyId19);};__alloyId23.on('fetch destroy change add remove reset', __alloyId24);var __alloyId34 = Alloy.Collections['mymodel'] || mymodel;function __alloyId35(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId35.opts || {};var models = __alloyId34.models;var len = models.length;var __alloyId28 = [];for (var i = 0; i < len; i++) {var __alloyId31 = models[i];__alloyId31.__transform = _.isFunction(__alloyId31.transform) ? __alloyId31.transform() : __alloyId31.toJSON();var __alloyId33 = Alloy.createController('inherit', { $model: __alloyId31 });
      __alloyId28.push(__alloyId33.getViewEx({ recurse: true }));}opts.animation ? $.__views["__alloyId27"].setItems(__alloyId28, opts.animation) : $.__views["__alloyId27"].setItems(__alloyId28);};__alloyId34.on('fetch destroy change add remove reset', __alloyId35);var __alloyId45 = Alloy.Collections['$.colinstance'] || $.colinstance;function __alloyId46(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId46.opts || {};var models = __alloyId45.models;var len = models.length;var __alloyId39 = [];for (var i = 0; i < len; i++) {var __alloyId42 = models[i];__alloyId42.__transform = _.isFunction(__alloyId42.transform) ? __alloyId42.transform() : __alloyId42.toJSON();var __alloyId44 = Alloy.createController('inherit', { $model: __alloyId42 });
      __alloyId39.push(__alloyId44.getViewEx({ recurse: true }));}opts.animation ? $.__views["__alloyId38"].setItems(__alloyId39, opts.animation) : $.__views["__alloyId38"].setItems(__alloyId39);};__alloyId45.on('fetch destroy change add remove reset', __alloyId46);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId4"] = Ti.UI.createLabel(
  { top: 20 });

  $.__views["index"].add($.__views["__alloyId4"]);
  $.__views["__alloyId5"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId5"]);
  $.__views["__alloyId6"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId6"]);
  $.__views["__alloyId7"] = Ti.UI.createLabel(
  {});

  $.__views["index"].add($.__views["__alloyId7"]);
  $.__views["__alloyId9"] = Ti.UI.createListSection(
  {});

  var __alloyId16 = [];__alloyId16.push($.__views["__alloyId9"]);$.__views["__alloyId8"] = Ti.UI.createListView(
  { sections: __alloyId16, height: Ti.UI.SIZE, canScroll: false, defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE });

  $.__views["index"].add($.__views["__alloyId8"]);
  $.__views["__alloyId18"] = Ti.UI.createListSection(
  {});

  var __alloyId25 = [];__alloyId25.push($.__views["__alloyId18"]);$.__views["__alloyId17"] = Ti.UI.createListView(
  { sections: __alloyId25, height: Ti.UI.SIZE, canScroll: false, defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE });

  $.__views["index"].add($.__views["__alloyId17"]);
  $.__views["__alloyId27"] = Ti.UI.createListSection(
  {});

  var __alloyId36 = [];__alloyId36.push($.__views["__alloyId27"]);$.__views["__alloyId26"] = Ti.UI.createListView(
  { sections: __alloyId36, height: Ti.UI.SIZE, canScroll: false, defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE });

  $.__views["index"].add($.__views["__alloyId26"]);
  $.__views["__alloyId38"] = Ti.UI.createListSection(
  {});

  var __alloyId47 = [];__alloyId47.push($.__views["__alloyId38"]);$.__views["__alloyId37"] = Ti.UI.createListView(
  { sections: __alloyId47, height: Ti.UI.SIZE, canScroll: false, defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE });

  $.__views["index"].add($.__views["__alloyId37"]);
  this.__alloyId48 = function () {
    $['modelinstance'].__transform = _.isFunction($['modelinstance'].transform) ? $['modelinstance'].transform() : $['modelinstance'].toJSON();this.__alloyId4.text = $['modelinstance']['__transform']['foo'];
    this.__alloyId5.text = $['modelinstance']['__transform']['foo'] + ' ' + $['modelinstance']['__transform']['bar'] + ' ' + $['modelinstance']['__transform']['missing'];
  }.bind(this);
  $['modelinstance'].on('fetch change destroy', this.__alloyId48);this.__alloyId49 = function () {
    Alloy['Models']['mymodel'].__transform = _.isFunction(Alloy['Models']['mymodel'].transform) ? Alloy['Models']['mymodel'].transform() : Alloy['Models']['mymodel'].toJSON();this.__alloyId6.text = Alloy['Models']['mymodel']['__transform']['foo'];
    this.__alloyId7.text = Alloy['Models']['mymodel']['__transform']['foo'] + ' ' + Alloy['Models']['mymodel']['__transform']['bar'] + ' ' + Alloy['Models']['mymodel']['__transform']['missing'];
  }.bind(this);
  Alloy['Models']['mymodel'].on('fetch change destroy', this.__alloyId49);exports.destroy = function () {__alloyId14 && __alloyId14.off('fetch destroy change add remove reset', __alloyId15);__alloyId23 && __alloyId23.off('fetch destroy change add remove reset', __alloyId24);__alloyId34 && __alloyId34.off('fetch destroy change add remove reset', __alloyId35);__alloyId45 && __alloyId45.off('fetch destroy change add remove reset', __alloyId46);$['modelinstance'] && $['modelinstance'].off('fetch change destroy', this.__alloyId48);Alloy['Models']['mymodel'] && Alloy['Models']['mymodel'].off('fetch change destroy', this.__alloyId49);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function init() {
    var attributes = {
      foo: 'FOO',
      bar: 'BAR' };


    $.modelinstance.set(attributes);

    Alloy.Models.mymodel.set(attributes);

    Alloy.Collections.mymodel.reset([attributes]);

    $.colinstance.reset([attributes]);
  }

  $.index.open();

  // runtime unit tests
  if (!false) {
    $.init = init;
    require('specs/index')($);
  } else {
    init();
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