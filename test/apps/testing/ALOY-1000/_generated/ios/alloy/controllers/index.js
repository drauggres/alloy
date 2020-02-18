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
  Alloy.Models.instance('book');

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["theButton"] = Ti.UI.createButton(
  { top: 20, title: 'Click Me', id: "theButton" });

  $.__views["index"].add($.__views["theButton"]);
  doClick ? $.addListener($.__views["theButton"], 'click', doClick) : __defers['$.__views["theButton"]!click!doClick'] = true;$.__views["theView"] = Ti.UI.createView(
  { layout: "vertical", id: "theView" });

  $.__views["index"].add($.__views["theView"]);
  $.__views["title"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", top: 10, id: "title" });

  $.__views["theView"].add($.__views["title"]);
  doClick ? $.addListener($.__views["title"], 'click', doClick) : __defers['$.__views["title"]!click!doClick'] = true;$.__views["author"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", top: 10, id: "author" });

  $.__views["theView"].add($.__views["author"]);
  doClick ? $.addListener($.__views["author"], 'click', doClick) : __defers['$.__views["author"]!click!doClick'] = true;$.__views["genre"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", top: 10, id: "genre" });

  $.__views["theView"].add($.__views["genre"]);
  doClick ? $.addListener($.__views["genre"], 'click', doClick) : __defers['$.__views["genre"]!click!doClick'] = true;var __alloyId2 = function () {Alloy['Models']['book'].__transform = _.isFunction(Alloy['Models']['book'].transform) ? Alloy['Models']['book'].transform() : Alloy['Models']['book'].toJSON();$.title.text = Alloy['Models']['book']['__transform']['title'];$.author.text = Alloy['Models']['book']['__transform']['author'];$.genre.text = Alloy['Models']['book']['__transform']['genre'];};Alloy['Models']['book'].on('fetch change destroy', __alloyId2);exports.destroy = function () {Alloy['Models']['book'] && Alloy['Models']['book'].off('fetch change destroy', __alloyId2);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var model = Alloy.Models.book;
  function doClick(e) {
    model.set('title', 'Atlas Shrugged');
    model.set('author', 'Ayn Rand');
    model.set('genre', 'Dystopia');
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["theButton"]!click!doClick'] && $.addListener($.__views["theButton"], 'click', doClick);__defers['$.__views["title"]!click!doClick'] && $.addListener($.__views["title"], 'click', doClick);__defers['$.__views["author"]!click!doClick'] && $.addListener($.__views["author"], 'click', doClick);__defers['$.__views["genre"]!click!doClick'] && $.addListener($.__views["genre"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map