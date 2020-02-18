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
  { backgroundColor: "#fff", fullscreen: false, layout: "vertical", exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  $.__views["info"] = Ti.UI.createLabel(
  { color: "#000", height: Ti.UI.SIZE, width: "250dp", top: "15dp", textAlign: "center", font: { fontSize: "18dp", fontWeight: "normal" }, text: 'Click anything to see its ID style entry', id: "info" });

  $.__views["index"].add($.__views["info"]);
  $.__views["button1"] = Ti.UI.createButton(
  { color: "#500", top: "15dp", height: "70dp", width: "250dp", borderRadius: 8, borderWidth: 2, borderColor: "#500", title: 'button1', id: "button1" });

  $.__views["index"].add($.__views["button1"]);
  $.__views["button2"] = Ti.UI.createButton(
  { color: "#500", top: "15dp", width: "100dp", height: Ti.UI.SIZE, title: 'button2', id: "button2" });

  $.__views["index"].add($.__views["button2"]);
  $.__views["button3"] = Ti.UI.createButton(
  { color: "#500", top: "15dp", height: "40dp", width: "200dp", borderRadius: 32, borderWidth: 1, borderColor: "#0f0", title: 'button3', id: "button3" });

  $.__views["index"].add($.__views["button3"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  $.index.open();

  var style = require('alloy/styles/index');
  var i, len;
  for (i = 0, len = $.index.children.length; i < len; i++) {
    var child = $.index.children[i];
    child.addEventListener('click', function (e) {
      var id = e.source.id;
      _.each(style, function (o) {
        if (o.key === id && o.isId) {
          // print each style that applies by ID to the source
          Ti.API.info(JSON.stringify(o));
        }
      });
    });
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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map