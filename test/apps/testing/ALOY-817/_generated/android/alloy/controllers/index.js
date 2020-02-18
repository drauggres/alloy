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
  Alloy.Collections.instance('empty');Alloy.Models.instance('empty');$.anotherModel = Alloy.createModel('empty');

  // Generated UI code
  collectionChange ? Alloy.Collections.empty.on('change', collectionChange) : __defers['Alloy.Collections.empty!change!collectionChange'] = true;modelChange ? Alloy.Models.empty.on('change', modelChange) : __defers['Alloy.Models.empty!change!modelChange'] = true;anotherModelChange ? $.anotherModel.on('change', anotherModelChange) : __defers['$.anotherModel!change!anotherModelChange'] = true;$.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  windowClick ? $.addListener($.__views["index"], 'click', windowClick) : __defers['$.__views["index"]!click!windowClick'] = true;$.__views["map2"] = Alloy.Globals.Map.createView(
  { id: "map2" });

  $.__views["index"].add($.__views["map2"]);
  mapClick ? $.addListener($.__views["map2"], 'click', mapClick) : __defers['$.__views["map2"]!click!mapClick'] = true;$.__views["__alloyId4"] = Alloy.createController('empty', { id: "__alloyId4", __parentSymbol: $.__views["index"] });
  $.__views["__alloyId4"].setParent($.__views["index"]);
  emptyInit ? $.__views["__alloyId4"].on('init', emptyInit) : __defers['$.__views["__alloyId4"]!init!emptyInit'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function mapClick(e) {
    Ti.API.info('map clicked');
  }

  function windowClick(e) {
    Ti.API.info('window clicked');
  }

  function modelChange(e) {
    Ti.API.info('model change');
  }

  function anotherModelChange(e) {
    Ti.API.info('another model change');
  }

  function collectionChange(e) {
    Ti.API.info('collection change');
  }

  function emptyInit(e) {
    Ti.API.info('empty controller init');
  }

  $.index.open();

  $.map2.fireEvent('click');
  Alloy.Collections.empty.trigger('change');
  Alloy.Models.empty.trigger('change');
  $.anotherModel.trigger('change');

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['Alloy.Collections.empty!change!collectionChange'] && Alloy.Collections.empty.on('change', collectionChange);__defers['Alloy.Models.empty!change!modelChange'] && Alloy.Models.empty.on('change', modelChange);__defers['$.anotherModel!change!anotherModelChange'] && $.anotherModel.on('change', anotherModelChange);__defers['$.__views["index"]!click!windowClick'] && $.addListener($.__views["index"], 'click', windowClick);__defers['$.__views["map2"]!click!mapClick'] && $.addListener($.__views["map2"], 'click', mapClick);__defers['$.__views["__alloyId4"]!init!emptyInit'] && $.__views["__alloyId4"].on('init', emptyInit);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map