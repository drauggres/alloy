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
  if (true) {
    $.__views["__alloyId0"] = Ti.UI.createWindow(
    { title: "Modal", id: "__alloyId0" });

    if (true) {
      $.__views["btnFoo"] = Ti.UI.createButton(
      { id: "btnFoo", title: "Show Contacts (ios)" });

      $.__views["__alloyId0"].add($.__views["btnFoo"]);
      try {$.addListener($.__views["btnFoo"], 'click', exports.showContacts);} catch (e) {__defers['$.__views["btnFoo"]!click!exports.showContacts'] = true;}}
    $.__views["welcomeNav"] = Ti.UI.createNavigationWindow(
    { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, window: $.__views["__alloyId0"], id: "welcomeNav" });

    $.__views["welcomeNav"] && $.addTopLevelView($.__views["welcomeNav"]);
  }
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  exports.showContacts = function (e) {
    Ti.API.info('showContacts: ' + e.source.title);
  };

  $.welcomeNav.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  if (true && true) {
    __defers['$.__views["btnFoo"]!click!exports.showContacts'] && $.addListener($.__views["btnFoo"], 'click', exports.showContacts);}


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map