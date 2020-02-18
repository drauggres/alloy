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
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var childView = Alloy.createController('childview');
  childView.updateViews({
    '#label': {
      text: 'I am a label',
      top: 50,
      width: Ti.UI.FILL,
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      ellipsize: false,
      backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [{ color: 'red', offset: 0.0 }, { color: 'blue', offset: 0.25 }, { color: 'red', offset: 1.0 }] } },


    '#anotherlabel': {
      text: 'I am also a label',
      foo: 'bar' },

    '#someNonExistentId': { text: 'I do not exist' } });


  $.index.add(childView.getView());

  var opts = {
    '#normallabel': {
      text: 'i used updateViews()',
      color: '#a00',
      font: {
        fontWeight: 'bold',
        fontSize: 24 },

      bottom: 50 } };



  // chain calls
  $.index.add(Alloy.createController('normalchild').updateViews(opts).getView());

  $.index.add(Alloy.createController('normalchild', {
    text: 'Set the old-fashioned way' }).
  getView());

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