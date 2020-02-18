var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.test.hellobutton/' + s :
  s.substring(0, index) + '/com.test.hellobutton/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/alloy/widget'))('com.test.hellobutton');this.__widgetId = 'com.test.hellobutton';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
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
  $.__views["helloButton"] = Ti.UI.createButton(
  { backgroundImage: WPATH('hello.png'), height: 135, width: 233, id: "helloButton" });

  $.__views["helloButton"] && $.addTopLevelView($.__views["helloButton"]);
  sayHello ? $.addListener($.__views["helloButton"], 'click', sayHello) : __defers['$.__views["helloButton"]!click!sayHello'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function sayHello() {
    // WPATH() will automatically make the path given to require() relative
    // to the widget's folder structure in the project. If you were to put 
    // the path in manually, it would look like this:
    //
    //     require('com.test.mywidget/hello').sayHello();
    //
    // WPATH() should be used on any paths that refer to files included in
    // your widget from the "lib" or "assets" directory.
    require(WPATH('hello')).sayHello();
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["helloButton"]!click!sayHello'] && $.addListener($.__views["helloButton"], 'click', sayHello);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/widgets/com.test.hellobutton/controllers/widget.js.map