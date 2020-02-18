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
  if (true) {
    $.__views["__alloyId0"] = Ti.UI.createSearchBar(
    { filterAttribute: "title", id: "__alloyId0" });

  }
  $.__views["ptr"] = Ti.UI.createRefreshControl(
  { id: "ptr", tintColor: "#008" });

  var __alloyId1 = [];$.__views["__alloyId2"] = Ti.UI.createTableViewRow(
  { title: "tableview", id: "__alloyId2" });

  __alloyId1.push($.__views["__alloyId2"]);$.__views["__alloyId3"] = Ti.UI.createTableViewRow(
  { title: "drag down to show refreshControl", id: "__alloyId3" });

  __alloyId1.push($.__views["__alloyId3"]);$.__views["__alloyId4"] = Ti.UI.createTableViewRow(
  { title: "click here to open listview", id: "__alloyId4" });

  __alloyId1.push($.__views["__alloyId4"]);openList ? $.addListener($.__views["__alloyId4"], 'click', openList) : __defers['$.__views["__alloyId4"]!click!openList'] = true;$.__views["jobList"] = Ti.UI.createTableView(
  { data: __alloyId1, search: $.__views["__alloyId0"], refreshControl: $.__views["ptr"], id: "jobList" });

  $.__views["index"].add($.__views["jobList"]);
  $.__views["listWin"] = Ti.UI.createWindow(
  { id: "listWin" });

  $.__views["listWin"] && $.addTopLevelView($.__views["listWin"]);
  $.__views["ptr"] = Ti.UI.createRefreshControl(
  { id: "ptr", tintColor: "#800" });

  var __alloyId7 = [];$.__views["__alloyId8"] = { properties: { title: "listview", id: "__alloyId8" } };__alloyId7.push($.__views["__alloyId8"]);$.__views["__alloyId9"] = { properties: { title: "drag down to show refreshControl", id: "__alloyId9" } };__alloyId7.push($.__views["__alloyId9"]);$.__views["__alloyId5"] = Ti.UI.createListSection(
  { id: "__alloyId5" });

  $.__views["__alloyId5"].items = __alloyId7;var __alloyId10 = [];__alloyId10.push($.__views["__alloyId5"]);$.__views["jobList"] = Ti.UI.createListView(
  { sections: __alloyId10, refreshControl: $.__views["ptr"], id: "jobList" });

  $.__views["listWin"].add($.__views["jobList"]);
  openList ? $.addListener($.__views["jobList"], 'click', openList) : __defers['$.__views["jobList"]!click!openList'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function openList() {
    $.listWin.open();
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId4"]!click!openList'] && $.addListener($.__views["__alloyId4"], 'click', openList);__defers['$.__views["jobList"]!click!openList'] && $.addListener($.__views["jobList"], 'click', openList);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/index.js.map