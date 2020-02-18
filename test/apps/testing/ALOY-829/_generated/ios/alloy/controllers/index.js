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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["section"] = Ti.UI.createListSection(
  { id: "section" });

  var __alloyId5 = Alloy.Collections['name'] || name;function __alloyId6(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId6.opts || {};var models = __alloyId5.models;var len = models.length;var __alloyId1 = [];for (var i = 0; i < len; i++) {var __alloyId2 = models[i];__alloyId2.__transform = _.isFunction(__alloyId2.transform) ? __alloyId2.transform() : __alloyId2.toJSON();var __alloyId4 = { properties: { title: __alloyId2.__transform.name, modelId: __alloyId2.__transform.id } };__alloyId1.push(__alloyId4);}opts.animation ? $.__views["section"].setItems(__alloyId1, opts.animation) : $.__views["section"].setItems(__alloyId1);};__alloyId5.on('fetch destroy change add remove reset', __alloyId6);var __alloyId7 = [];__alloyId7.push($.__views["section"]);$.__views["__alloyId0"] = Ti.UI.createListView(
  { sections: __alloyId7, id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  showInfo ? $.addListener($.__views["__alloyId0"], 'itemclick', showInfo) : __defers['$.__views["__alloyId0"]!itemclick!showInfo'] = true;exports.destroy = function () {__alloyId5 && __alloyId5.off('fetch destroy change add remove reset', __alloyId6);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var names = Alloy.Collections.name;

  function green(str) {return '\x1B[32m' + str + '\x1B[39m';}
  function red(str) {return '\x1B[31m' + str + '\x1B[39m';}

  // show the info from the selected model
  function showInfo(e) {
    // get the model id from the list item
    var modelId = e.section.getItemAt(e.itemIndex).properties.modelId;

    // fetch a specific model based on the given id
    var model = Alloy.createModel('info');
    model.fetch({ id: modelId });

    // assert we got the right data back
    var pass = JSON.stringify(model.attributes) === JSON.stringify({
      id: modelId,
      info: 'info ' + modelId });

    Ti.API.info('Assert single info model returned with "{id:' + modelId + '}": ' + (pass ? green('OK') : red('FAIL')));
  }

  // fetch the data to update the UI
  names.fetch();

  // open the window
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId0"]!itemclick!showInfo'] && $.addListener($.__views["__alloyId0"], 'itemclick', showInfo);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map