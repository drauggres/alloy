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
  Alloy.Collections.instance('test');

  // <dataFunctions>

  // </dataFunctionsCode>

  // Generated UI code
  exports.destroy = function () {};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Ti.API.info('aloy1127: ' + Ti.App.Properties.hasProperty('aloy1127'));
  if (!Ti.App.Properties.hasProperty('aloy1127')) {
    for (var i = 1, j = 7; i < j; i++) {
      Alloy.createModel('test', { username: 'User ' + i }).save();
    }
    Ti.App.Properties.setString('aloy1127', 'yes');
  }

  Alloy.Collections.test.fetch();

  $.index.addEventListener('open', function () {
    $.destroy();
  });

  $.index.open();

  render();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;