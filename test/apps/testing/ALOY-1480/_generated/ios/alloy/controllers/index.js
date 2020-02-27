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
  Alloy.Models.instance('model-a');Alloy.Models.instance('modelb');Alloy.Collections.instance('model-a');

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["__alloyId6"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", top: 20, id: "__alloyId6" });

  $.__views["index"].add($.__views["__alloyId6"]);
  $.__views["__alloyId7"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "__alloyId7" });

  $.__views["index"].add($.__views["__alloyId7"]);
  $.__views["__alloyId8"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "__alloyId8" });

  $.__views["index"].add($.__views["__alloyId8"]);
  $.__views["__alloyId9"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", id: "__alloyId9" });

  $.__views["index"].add($.__views["__alloyId9"]);
  $.__views["__alloyId11"] = Ti.UI.createListSection(
  { id: "__alloyId11" });

  var __alloyId16 = Alloy.Collections['model-a'] || model - a;function __alloyId17(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId17.opts || {};var models = __alloyId16.models;var len = models.length;var __alloyId12 = [];for (var i = 0; i < len; i++) {var __alloyId13 = models[i];__alloyId13.__transform = _.isFunction(__alloyId13.transform) ? __alloyId13.transform() : __alloyId13.toJSON();var __alloyId15 = { properties: { font: __alloyId13.__transform.font, title: 'well ' + __alloyId13.__transform.greeting + ' there ' + __alloyId13.__transform.subject + '!' } };__alloyId12.push(__alloyId15);}opts.animation ? $.__views["__alloyId11"].setItems(__alloyId12, opts.animation) : $.__views["__alloyId11"].setItems(__alloyId12);};__alloyId16.on('fetch destroy change add remove reset', __alloyId17);var __alloyId18 = [];__alloyId18.push($.__views["__alloyId11"]);$.__views["__alloyId10"] = Ti.UI.createListView(
  { sections: __alloyId18, height: Ti.UI.SIZE, canScroll: false, id: "__alloyId10" });

  $.__views["index"].add($.__views["__alloyId10"]);
  var __alloyId19 = function () {Alloy['Models']['model-a'].__transform = _.isFunction(Alloy['Models']['model-a'].transform) ? Alloy['Models']['model-a'].transform() : Alloy['Models']['model-a'].toJSON();Alloy['Models']['modelb'].__transform = _.isFunction(Alloy['Models']['modelb'].transform) ? Alloy['Models']['modelb'].transform() : Alloy['Models']['modelb'].toJSON();$.__alloyId6.font = Alloy['Models']['model-a']['__transform']['font'];$.__alloyId6.text = Alloy['Models']['model-a']['__transform']['greeting'] + ' ' + Alloy['Models']['modelb']['__transform']['mix-it'];$.__alloyId7.font = Alloy['Models']['model-a']['__transform']['font'];$.__alloyId7.text = 'well ' + Alloy['Models']['model-a']['__transform']['greeting'];$.__alloyId8.font = Alloy['Models']['model-a']['__transform']['font'];$.__alloyId8.text = Alloy['Models']['model-a']['__transform']['greeting'] + ' ' + Alloy['Models']['modelb']['__transform']['deep']['link'] + '!';$.__alloyId9.font = Alloy['Models']['model-a']['__transform']['font'];$.__alloyId9.text = 'well ' + Alloy['Models']['model-a']['__transform']['greeting'] + ' there\'s ' + Alloy['Models']['model-a']['__transform']['subject'] + '!';};Alloy['Models']['model-a'].on('fetch change destroy', __alloyId19);var __alloyId20 = function () {Alloy['Models']['model-a'].__transform = _.isFunction(Alloy['Models']['model-a'].transform) ? Alloy['Models']['model-a'].transform() : Alloy['Models']['model-a'].toJSON();Alloy['Models']['modelb'].__transform = _.isFunction(Alloy['Models']['modelb'].transform) ? Alloy['Models']['modelb'].transform() : Alloy['Models']['modelb'].toJSON();$.__alloyId6.text = Alloy['Models']['model-a']['__transform']['greeting'] + ' ' + Alloy['Models']['modelb']['__transform']['mix-it'];$.__alloyId8.text = Alloy['Models']['model-a']['__transform']['greeting'] + ' ' + Alloy['Models']['modelb']['__transform']['deep']['link'] + '!';};Alloy['Models']['modelb'].on('fetch change destroy', __alloyId20);exports.destroy = function () {__alloyId16 && __alloyId16.off('fetch destroy change add remove reset', __alloyId17);Alloy['Models']['model-a'] && Alloy['Models']['model-a'].off('fetch change destroy', __alloyId19);Alloy['Models']['modelb'] && Alloy['Models']['modelb'].off('fetch change destroy', __alloyId20);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var attributes = {
    greeting: 'hello',
    subject: 'world' };


  Alloy.Models.modelb.set({
    'mix-it': 'Mix It!',
    deep: {
      link: 'deep-link' } });



  Alloy.Models['model-a'].set(attributes);
  Alloy.Collections['model-a'].reset([attributes]);

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