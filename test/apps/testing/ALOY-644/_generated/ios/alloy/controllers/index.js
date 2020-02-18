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
  var __alloyId0 = [];$.__views["__alloyId2"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, navBarHidden: true, id: "__alloyId2" });

  $.__views["__alloyId3"] = Ti.UI.createLabel(
  { height: "50dp", width: Ti.UI.FILL, top: 0, textAlign: "center", color: "#fff", font: { fontSize: "32dp", fontWeight: "bold" }, text: 'Model', id: "__alloyId3" });

  $.__views["__alloyId2"].add($.__views["__alloyId3"]);
  $.__views["counter"] = Ti.UI.createLabel(
  { font: { fontSize: "160dp", fontWeight: "bold" }, id: "counter" });

  $.__views["__alloyId2"].add($.__views["counter"]);
  updateState ? $.addListener($.__views["counter"], 'click', updateState) : __defers['$.__views["counter"]!click!updateState'] = true;$.__views["__alloyId1"] = Ti.UI.createTab(
  { window: $.__views["__alloyId2"], title: "model", id: "__alloyId1" });

  __alloyId0.push($.__views["__alloyId1"]);$.__views["__alloyId5"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, navBarHidden: true, id: "__alloyId5" });

  $.__views["__alloyId6"] = Ti.UI.createLabel(
  { height: "50dp", width: Ti.UI.FILL, top: 0, textAlign: "center", color: "#fff", font: { fontSize: "32dp", fontWeight: "bold" }, text: 'Collection', id: "__alloyId6" });

  $.__views["__alloyId5"].add($.__views["__alloyId6"]);
  $.__views["table"] = Ti.UI.createTableView(
  { top: "50dp", id: "table" });

  $.__views["__alloyId5"].add($.__views["table"]);
  var __alloyId10 = Alloy.Collections['heroes'] || heroes;function __alloyId11(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId11.opts || {};var models = __alloyId10.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId7 = models[i];__alloyId7.__transform = _.isFunction(__alloyId7.transform) ? __alloyId7.transform() : __alloyId7.toJSON();var __alloyId9 = Ti.UI.createTableViewRow(
      { title: __alloyId7.__transform.name });

      rows.push(__alloyId9);
    }$.__views["table"].setData(rows);};__alloyId10.on('fetch destroy change add remove reset', __alloyId11);modifyHero ? $.addListener($.__views["table"], 'click', modifyHero) : __defers['$.__views["table"]!click!modifyHero'] = true;$.__views["__alloyId4"] = Ti.UI.createTab(
  { window: $.__views["__alloyId5"], title: "collection", id: "__alloyId4" });

  __alloyId0.push($.__views["__alloyId4"]);$.__views["index"] = Ti.UI.createTabGroup(
  { tabs: __alloyId0, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  var __alloyId12 = function () {Alloy['Models']['appState'].__transform = _.isFunction(Alloy['Models']['appState'].transform) ? Alloy['Models']['appState'].transform() : Alloy['Models']['appState'].toJSON();$.__alloyId3.backgroundColor = Alloy['Models']['appState']['__transform']['color'];$.counter.text = Alloy['Models']['appState']['__transform']['counter'];$.counter.color = Alloy['Models']['appState']['__transform']['color'];$.__alloyId6.backgroundColor = Alloy['Models']['appState']['__transform']['color'];};Alloy['Models']['appState'].on('fetch change destroy', __alloyId12);exports.destroy = function () {__alloyId10 && __alloyId10.off('fetch destroy change add remove reset', __alloyId11);Alloy['Models']['appState'] && Alloy['Models']['appState'].off('fetch change destroy', __alloyId12);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var appState = Alloy.Models.appState;
  var heroes = Alloy.Collections.heroes;

  function generateRandomColor() {
    var c = Math.floor(Math.random() * 255) * 256 * 256 +
    Math.floor(Math.random() * 255) * 256 +
    Math.floor(Math.random() * 255);
    c = c.toString(16);
    while (c.length < 6) {
      c = '0' + c;
    }
    return '#' + c;
  }

  // Contrived update function to modify the model
  // associated with the clicked row
  function modifyHero(e) {
    var model = heroes.at(e.index);
    model.set('name', model.get('name') + '+');

    // this should throw a warning since it is attempting
    // to sync on a collection that has no persistence.
    model.save();
  }

  // Update the model's counter and color, which in turn
  // updates the UI via model binding
  function updateState() {
    appState.set({
      counter: appState.get('counter') + 1,
      color: generateRandomColor() });

  }

  // Simulate a change in our model to trigger UI binding.
  appState.trigger('change');
  heroes.trigger('change');

  // this should throw a warning since it is attempting
  // to sync on a model that has no persistence.
  appState.fetch();

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["counter"]!click!updateState'] && $.addListener($.__views["counter"], 'click', updateState);__defers['$.__views["table"]!click!modifyHero'] && $.addListener($.__views["table"], 'click', modifyHero);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map