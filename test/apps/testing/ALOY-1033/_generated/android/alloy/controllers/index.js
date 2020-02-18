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
  Alloy.Collections.instance('rows');

  // <dataFunctions>
  var __alloyId11 = Alloy.Collections['rows'] || rows;function __alloyId12(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId12.opts || {};var models = __alloyId11.models;var len = models.length;var __alloyId7 = [];for (var i = 0; i < len; i++) {var __alloyId8 = models[i];__alloyId8.__transform = _.isFunction(__alloyId8.transform) ? __alloyId8.transform() : __alloyId8.toJSON();var __alloyId10 = { template: "template", title: { text: __alloyId8.__transform.title }, properties: { searchableText: __alloyId8.__transform.title } };__alloyId7.push(__alloyId10);}opts.animation ? $.__views["main"].setItems(__alloyId7, opts.animation) : $.__views["main"].setItems(__alloyId7);};__alloyId11.on('fetch destroy change add remove reset', __alloyId12);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  if (true) {
    $.__views["searchList"] = Ti.UI.createSearchBar(
    { id: "searchList", showCancel: true, top: 20 });

  }
  var __alloyId2 = {};var __alloyId5 = [];var __alloyId6 = { type: 'Ti.UI.Label', bindId: 'title', properties: { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", bindId: "title", left: 5 } };__alloyId5.push(__alloyId6);var __alloyId4 = { properties: { name: "template" }, childTemplates: __alloyId5 };__alloyId2["template"] = __alloyId4;$.__views["main"] = Ti.UI.createListSection(
  { id: "main" });

  var __alloyId13 = [];__alloyId13.push($.__views["main"]);$.__views["listView"] = Ti.UI.createListView(
  { sections: __alloyId13, templates: __alloyId2, searchView: $.__views.searchList, id: "listView", top: 0, defaultItemTemplate: "template" });

  $.__views["index"].add($.__views["listView"]);
  exports.destroy = function () {__alloyId11 && __alloyId11.off('fetch destroy change add remove reset', __alloyId12);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function randomString(length) {
    length = length || 8;
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
  if (!Ti.App.Properties.hasProperty('lvsearch')) {
    for (var i = 1, j = 30; i < j; i++) {
      Alloy.createModel('rows', { title: randomString() }).save();
    }
    Ti.App.Properties.setString('lvsearch', 'yes');
  }
  Alloy.Collections.rows.fetch();

  if (false) {
    $.searchList.addEventListener('cancel', function (e) {
      // hide the keyboard on Cancel
      $.searchList.blur();
    });
  }

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