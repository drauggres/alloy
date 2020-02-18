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
  { backgroundColor: "#fff", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["section"] = Ti.UI.createListSection(
  { id: "section" });

  var __alloyId5 = Alloy.Collections['info'] || info;function loadData(e) {if (e && e.fromAdapter) {return;}var opts = loadData.opts || {};var models = __alloyId5.models;var len = models.length;var __alloyId1 = [];for (var i = 0; i < len; i++) {var __alloyId2 = models[i];__alloyId2.__transform = _.isFunction(__alloyId2.transform) ? __alloyId2.transform() : __alloyId2.toJSON();var __alloyId4 = { properties: { title: __alloyId2.__transform.title } };__alloyId1.push(__alloyId4);}opts.animation ? $.__views["section"].setItems(__alloyId1, opts.animation) : $.__views["section"].setItems(__alloyId1);};__alloyId5.on('fetch destroy change add remove reset', loadData);var __alloyId6 = [];__alloyId6.push($.__views["section"]);$.__views["__alloyId0"] = Ti.UI.createListView(
  { sections: __alloyId6, id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  doClick ? $.addListener($.__views["__alloyId0"], 'itemclick', doClick) : __defers['$.__views["__alloyId0"]!itemclick!doClick'] = true;exports.destroy = function () {__alloyId5 && __alloyId5.off('fetch destroy change add remove reset', loadData);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var TEXT = 'Click me to add more items';
  var info = Alloy.Collections.info;
  var ctr = 0;

  // Add new ListItems when ever the button is clicked
  function doClick(e) {
    if (e.sectionIndex === 0 && e.itemIndex === 0) {
      info.add({
        title: ctr++ === 0 ? TEXT : 'Row #' + ctr });

    }
  }

  // Create a basic section 
  $.section.items = [{ properties: { title: TEXT } }];

  // Animation options for ListView are only supported on iOS...
  if (true) {
    // Add "opts" to the "dataFunction" function object. In this case, we'll be
    // adding "animation" options that will be used by the ListView's generated
    // data binding code to make sure our ListItems don't animate when 
    // updated.
    // TODO: There's a Titanium bug where ListItems still animate when using
    //       the ListSection.setItems() function. When TIMOB-13737 is resolved,
    //       this will work as expected and the ListItems won't animate when
    //       they are added.
    loadData.opts = {
      animation: {
        animated: false } };


  }

  // Open the window
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId0"]!itemclick!doClick'] && $.addListener($.__views["__alloyId0"], 'itemclick', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map