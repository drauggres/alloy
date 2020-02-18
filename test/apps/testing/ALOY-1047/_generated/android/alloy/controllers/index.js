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
  { backgroundColor: "white", id: "index", title: "Books" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["starwidget"] = Alloy.createWidget('starrating', 'widget', { id: "starwidget", max: 5, initialRating: 2.5, top: 20, __parentSymbol: $.__views["index"] });
  $.__views["starwidget"].setParent($.__views["index"]);
  $.__views["table"] = Ti.UI.createTableView(
  { id: "table", top: 50 });

  $.__views["index"].add($.__views["table"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var rows = [];
  var titles = ['Lord of the Rings', 'Harry Potter', 'Eragon', 'Wheel of Time', 'Narnia'];
  for (var i = 0, j = titles.length; i < j; i++) {
    rows.push(Alloy.createController('row', { title: titles[i] }).getView());
  }
  $.table.data = rows;

  function doFoo(num) {
    alert('Your rating = ' + num);
  }
  $.starwidget.init(doFoo);

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map