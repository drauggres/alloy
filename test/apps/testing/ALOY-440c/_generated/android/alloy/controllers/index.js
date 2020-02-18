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
  Alloy.Collections.instance('book');

  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", exitOnClose: true, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  function __alloyId7() {
    $.__views["index"].removeEventListener('open', __alloyId7);
    if ($.__views["index"].activity) {
      $.__views["index"].activity.onCreateOptionsMenu = function (e) {
        var __alloyId6 = { title: "Add", showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS, id: "__alloyId5" };
        if (false) {
          __alloyId6.actionView = false;
        }
        $.__views["__alloyId5"] = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
        $.__views["__alloyId5"].applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
        $.__alloyId5 = $.__views["__alloyId5"];
        doClick ? $.addListener($.__views["__alloyId5"], 'click', doClick) : __defers['$.__views["__alloyId5"]!click!doClick'] = true;
      };
    } else {
      Ti.API.warn('You attempted to attach an Android Menu to a lightweight Window');
      Ti.API.warn('or other UI component which does not have an Android activity.');
      Ti.API.warn('Android Menus can only be opened on TabGroups and heavyweight Windows.');
    }
  }
  $.__views["index"].addEventListener('open', __alloyId7);$.__views["__alloyId8"] = Ti.UI.createPicker(
  { backgroundColor: "black", width: Ti.UI.FILL, height: Ti.UI.SIZE, selectionIndicator: true, top: 0, id: "__alloyId8" });

  $.__views["index"].add($.__views["__alloyId8"]);
  var __alloyId9 = [];$.__views["__alloyId10"] = Ti.UI.createPickerColumn(
  { id: "__alloyId10" });

  __alloyId9.push($.__views["__alloyId10"]);
  var __alloyId13 = Alloy.Collections['book'] || book;function __alloyId14(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId14.opts || {};var models = __alloyId13.models;var len = models.length;var rows = [];
    _.each($.__views["__alloyId10"].getRows(), function (r) {$.__views["__alloyId10"].removeRow(r);});
    for (var i = 0; i < len; i++) {var __alloyId11 = models[i];__alloyId11.__transform = _.isFunction(__alloyId11.transform) ? __alloyId11.transform() : __alloyId11.toJSON();$.__views["__alloyId12"] = Ti.UI.createPickerRow(
      { fontSize: "18dp", title: __alloyId11.__transform.title, id: "__alloyId12" });

      rows.push($.__views["__alloyId12"]);
    }_.each(rows, function (row) {$.__views["__alloyId10"].addRow(row);});};__alloyId13.on('fetch destroy change add remove reset', __alloyId14);$.__views["__alloyId8"].add(__alloyId9);
  $.__views["__alloyId15"] = Ti.UI.createTableView(
  { top: 100, id: "__alloyId15" });

  $.__views["index"].add($.__views["__alloyId15"]);
  var __alloyId19 = Alloy.Collections['book'] || book;function __alloyId20(e) {if (e && e.fromAdapter) {return;}var opts = __alloyId20.opts || {};var models = __alloyId19.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {var __alloyId16 = models[i];__alloyId16.__transform = _.isFunction(__alloyId16.transform) ? __alloyId16.transform() : __alloyId16.toJSON();var __alloyId18 = Ti.UI.createTableViewRow(
      { color: "black", font: { fontSize: "18dp" }, title: __alloyId16.__transform.title });

      rows.push(__alloyId18);
    }$.__views["__alloyId15"].setData(rows);};__alloyId19.on('fetch destroy change add remove reset', __alloyId20);$.__views["__alloyId21"] = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: "15dp" }, text: 'Click the ActionBar icon to add a row', id: "__alloyId21" });

  $.__views["index"].add($.__views["__alloyId21"]);
  exports.destroy = function () {__alloyId13 && __alloyId13.off('fetch destroy change add remove reset', __alloyId14);__alloyId19 && __alloyId19.off('fetch destroy change add remove reset', __alloyId20);};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  Alloy.Collections.book.fetch();

  var i = 0;

  function doClick(e) {
    Ti.API.info(JSON.stringify(e));
    var item = Alloy.createModel('book', { title: i });
    Alloy.Collections.book.add(item);
    i++;
  }

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["__alloyId5"]!click!doClick'] && $.addListener($.__views["__alloyId5"], 'click', doClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/alloy/controllers/index.js.map