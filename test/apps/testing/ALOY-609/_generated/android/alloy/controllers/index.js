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
  var __alloyId0 = {};var __alloyId3 = [];var __alloyId5 = { type: 'Ti.UI.ImageView', bindId: 'image', properties: { left: "10dp", top: "10dp", height: "50dp", width: "50dp", bindId: "image" } };__alloyId3.push(__alloyId5);var __alloyId7 = { type: 'Ti.UI.Label', bindId: 'title', properties: { left: "70dp", right: "10dp", top: "10dp", font: { fontSize: "18dp", fontWeight: "bold" }, height: "30dp", color: "#222", textAlign: "left", bindId: "title" } };__alloyId3.push(__alloyId7);var __alloyId9 = { type: 'Ti.UI.Label', bindId: 'subtitle', properties: { left: "70dp", right: "10dp", bottom: "10dp", font: { fontSize: "12dp", fontWeight: "normal" }, height: "20dp", color: "#444", textAlign: "left", bindId: "subtitle" } };__alloyId3.push(__alloyId9);var __alloyId2 = { properties: { name: "fullItem", height: 70 }, childTemplates: __alloyId3 };__alloyId0["fullItem"] = __alloyId2;var __alloyId12 = [];var __alloyId14 = { type: 'Ti.UI.Label', bindId: 'title', properties: { left: "10dp", right: "10dp", top: "10dp", font: { fontSize: "18dp", fontWeight: "bold" }, height: "30dp", color: "#222", textAlign: "left", bindId: "title" } };__alloyId12.push(__alloyId14);var __alloyId16 = { type: 'Ti.UI.Label', bindId: 'subtitle', properties: { left: "10dp", right: "10dp", bottom: "10dp", font: { fontSize: "12dp", fontWeight: "normal" }, height: "20dp", color: "#444", textAlign: "left", bindId: "subtitle" } };__alloyId12.push(__alloyId16);var __alloyId11 = { properties: { name: "titleAndSub", height: 70 }, childTemplates: __alloyId12 };__alloyId0["titleAndSub"] = __alloyId11;var __alloyId19 = [];var __alloyId21 = { type: 'Ti.UI.Label', bindId: 'title', properties: { left: "10dp", right: "10dp", top: "10dp", font: { fontSize: "18dp", fontWeight: "bold" }, height: "30dp", color: "#222", textAlign: "left", bindId: "title" } };__alloyId19.push(__alloyId21);var __alloyId18 = { properties: { name: "title", height: 50 }, childTemplates: __alloyId19 };__alloyId0["title"] = __alloyId18;$.__views["section"] = Ti.UI.createListSection(
  { id: "section" });

  var __alloyId26 = Alloy.Collections['info'] || info;function __alloyId27(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId27.opts || {};var models = __alloyId26.models;var len = models.length;var __alloyId22 = [];for (var i = 0; i < len; i++) {var __alloyId23 = models[i];__alloyId23.__transform = doTransform(__alloyId23);var __alloyId25 = { template: __alloyId23.__transform.template, title: { text: __alloyId23.__transform.title }, subtitle: { text: __alloyId23.__transform.subtitle }, image: { image: __alloyId23.__transform.image } };__alloyId22.push(__alloyId25);}opts.animation ? $.__views["section"].setItems(__alloyId22, opts.animation) : $.__views["section"].setItems(__alloyId22);};__alloyId26.on('fetch destroy change add remove reset', __alloyId27);var __alloyId28 = [];__alloyId28.push($.__views["section"]);$.__views["list"] = Ti.UI.createListView(
  { top: 0, bottom: "50dp", sections: __alloyId28, templates: __alloyId0, id: "list", defaultItemTemplate: "title" });

  $.__views["index"].add($.__views["list"]);
  $.__views["toolbar"] = Ti.UI.createView(
  { height: "50dp", width: "100%", bottom: 0, layout: "horizontal", id: "toolbar" });

  $.__views["index"].add($.__views["toolbar"]);
  $.__views["__alloyId29"] = Alloy.createController('button', { label: "reset", id: "__alloyId29", __parentSymbol: $.__views["toolbar"] });
  $.__views["__alloyId29"].setParent($.__views["toolbar"]);
  doButtonClick ? $.__views["__alloyId29"].on('buttonClick', doButtonClick) : __defers['$.__views["__alloyId29"]!buttonClick!doButtonClick'] = true;$.__views["__alloyId30"] = Alloy.createController('button', { label: "template1", id: "__alloyId30", __parentSymbol: $.__views["toolbar"] });
  $.__views["__alloyId30"].setParent($.__views["toolbar"]);
  doButtonClick ? $.__views["__alloyId30"].on('buttonClick', doButtonClick) : __defers['$.__views["__alloyId30"]!buttonClick!doButtonClick'] = true;$.__views["__alloyId31"] = Alloy.createController('button', { label: "template2", id: "__alloyId31", __parentSymbol: $.__views["toolbar"] });
  $.__views["__alloyId31"].setParent($.__views["toolbar"]);
  doButtonClick ? $.__views["__alloyId31"].on('buttonClick', doButtonClick) : __defers['$.__views["__alloyId31"]!buttonClick!doButtonClick'] = true;$.__views["__alloyId32"] = Alloy.createController('button', { label: "template3", id: "__alloyId32", __parentSymbol: $.__views["toolbar"] });
  $.__views["__alloyId32"].setParent($.__views["toolbar"]);
  doButtonClick ? $.__views["__alloyId32"].on('buttonClick', doButtonClick) : __defers['$.__views["__alloyId32"]!buttonClick!doButtonClick'] = true;exports.destroy = function () {__alloyId26 && __alloyId26.off('fetch destroy change add remove reset', __alloyId27);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var info = Alloy.Collections.info;

  // assign a ListItem template based on the contents of the model
  function doTransform(model) {
    var o = model.toJSON();
    if (o.subtitle) {
      if (o.image) {
        o.template = 'fullItem';
      } else {
        o.template = 'titleAndSub';
      }
    } else {
      o.template = 'title';
    }
    return o;
  }

  // Handle the buttonClick event triggered from the button controller.
  // Notice that we will be updating the ListView UI without actually ever
  // referring directly to the ListView itself, only modifying the model on
  // which it relies.
  function doButtonClick(e) {
    if (_.isEmpty(e.modelObj)) {
      // use a custom query to quickly empty the SQLite store
      var db = Ti.Database.open('_alloy_');
      db.execute('DELETE FROM info;');
      db.close();

      // refresh the collection to reflect this in the UI
      info.fetch();
    } else {
      // create a model for the listitem
      var model = Alloy.createModel('info', e.modelObj);

      // add model to collection which will in turn update the UI
      info.add(model);

      // save the model to SQLite
      model.save();
    }
  }

  $.index.open();

  info.fetch();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId29"]!buttonClick!doButtonClick'] && $.__views["__alloyId29"].on('buttonClick', doButtonClick);__defers['$.__views["__alloyId30"]!buttonClick!doButtonClick'] && $.__views["__alloyId30"].on('buttonClick', doButtonClick);__defers['$.__views["__alloyId31"]!buttonClick!doButtonClick'] && $.__views["__alloyId31"].on('buttonClick', doButtonClick);__defers['$.__views["__alloyId32"]!buttonClick!doButtonClick'] && $.__views["__alloyId32"].on('buttonClick', doButtonClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map