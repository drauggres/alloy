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
  Alloy.Collections.instance('heroes');

  // <dataFunctions>
  var __alloyId12 = Alloy.Collections['heroes'] || heroes;function __alloyId13(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId13.opts || {};var models = __alloyId12.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId5 = models[i];__alloyId5.__transform = _.isFunction(__alloyId5.transform) ? __alloyId5.transform() : __alloyId5.toJSON();var __alloyId7 = Ti.UI.createTableViewRow(
      {});

      rows.push(__alloyId7);
      var __alloyId9 = Ti.UI.createLabel(
      { left: 5, text: __alloyId5.__transform.name });

      __alloyId7.add(__alloyId9);
      var __alloyId11 = Ti.UI.createSwitch(
      { right: 5, value: __alloyId5.__transform.status });

      __alloyId7.add(__alloyId11);
    }$.__views["table"].setData(rows);};__alloyId12.on('fetch destroy change add remove reset', __alloyId13);
  // </dataFunctionsCode>

  // Generated UI code
  $.__views["__alloyId2"] = Ti.UI.createWindow(
  { title: "data switches" });

  $.__views["__alloyId4"] = Ti.UI.createButton(
  { title: "toggle" });

  toggleState ? $.addListener($.__views["__alloyId4"], 'click', toggleState) : __defers['$.__views["__alloyId4"]!click!toggleState'] = true;$.__views["__alloyId2"].rightNavButton = $.__views["__alloyId4"];$.__views["table"] = Ti.UI.createTableView(
  { id: "table", top: 20 });

  $.__views["__alloyId2"].add($.__views["table"]);
  $.__views["index"] = Ti.UI.createNavigationWindow(
  { backgroundColor: "#fff", fullscreen: false, exitOnClose: true, window: $.__views["__alloyId2"], id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {__alloyId12 && __alloyId12.off('fetch destroy change add remove reset', __alloyId13);};


  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function toggleState() {
    _.each(Alloy.Collections.heroes.models, function (model) {
      model.set('status', Math.random() > 0.5);
    });
  }

  if (!Ti.App.Properties.hasProperty('seeded')) {

    // add all items to collection
    Alloy.Collections.heroes.reset([{
      'name': 'Superman',
      'status': false },
    {
      'name': 'Batman',
      'status': true },
    {
      'name': 'Spiderman',
      'status': false },
    {
      'name': 'Wonder Woman',
      'status': true },
    {
      'name': 'Tony Lukasavage',
      'status': false }]);


    // save all of the elements
    Alloy.Collections.heroes.each(function (_m) {
      _m.save();
    });

    Ti.App.Properties.setString('seeded', 'yuppers');
    Alloy.Collections.heroes.fetch();
  }

  Alloy.Collections.heroes.fetch();
  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId4"]!click!toggleState'] && $.addListener($.__views["__alloyId4"], 'click', toggleState);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;