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
  this.__controllerPath = 'add';
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
  $.__views["addWin"] = Ti.UI.createWindow(
  { backgroundColor: "#fff", layout: "vertical", barColor: "#a00", id: "addWin", title: "Add Item", modal: true });

  $.__views["addWin"] && $.addTopLevelView($.__views["addWin"]);
  focusTextField ? $.addListener($.__views["addWin"], 'open', focusTextField) : __defers['$.__views["addWin"]!open!focusTextField'] = true;$.__views["itemField"] = Ti.UI.createTextField(
  { width: "90%", top: "25dp", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, returnKeyType: Ti.UI.RETURNKEY_DONE, id: "itemField", hintText: "What do you need to do?" });

  $.__views["addWin"].add($.__views["itemField"]);
  closeKeyboard ? $.addListener($.__views["itemField"], 'return', closeKeyboard) : __defers['$.__views["itemField"]!return!closeKeyboard'] = true;$.__views["__alloyId0"] = Ti.UI.createButton(
  { width: "50%", top: "20dp", title: 'Add Item', id: "__alloyId0" });

  $.__views["addWin"].add($.__views["__alloyId0"]);
  addItem ? $.addListener($.__views["__alloyId0"], 'click', addItem) : __defers['$.__views["__alloyId0"]!click!addItem'] = true;$.__views["__alloyId1"] = Ti.UI.createButton(
  { width: "50%", top: "20dp", title: 'Cancel', id: "__alloyId1" });

  $.__views["addWin"].add($.__views["__alloyId1"]);
  closeWindow ? $.addListener($.__views["__alloyId1"], 'click', closeWindow) : __defers['$.__views["__alloyId1"]!click!closeWindow'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function addItem() {
    var todos = Alloy.Collections.todo;

    // Create a new model for the todo collection
    var task = Alloy.createModel('Todo', {
      item: $.itemField.value,
      done: 0 });


    // add new model to the global collection
    todos.add(task);

    // save the model to persistent storage
    task.save();

    // reload the tasks
    todos.fetch();

    closeWindow();
  }

  function focusTextField() {
    $.itemField.focus();
  }

  function closeKeyboard(e) {
    e.source.blur();
  }

  function closeWindow() {
    $.addWin.close();
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["addWin"]!open!focusTextField'] && $.addListener($.__views["addWin"], 'open', focusTextField);__defers['$.__views["itemField"]!return!closeKeyboard'] && $.addListener($.__views["itemField"], 'return', closeKeyboard);__defers['$.__views["__alloyId0"]!click!addItem'] && $.addListener($.__views["__alloyId0"], 'click', addItem);__defers['$.__views["__alloyId1"]!click!closeWindow'] && $.addListener($.__views["__alloyId1"], 'click', closeWindow);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/controllers/add.js.map