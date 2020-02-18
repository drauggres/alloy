var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.loading/' + s :
  s.substring(0, index) + '/com.appcelerator.loading/' + s.substring(index + 1);

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
  var Widget = new (require('/alloy/widget'))('com.appcelerator.loading');this.__widgetId = 'com.appcelerator.loading';
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
  $.__views["loading"] = Ti.UI.createImageView(
  { height: 20, width: 20, images: ["/images/com.appcelerator.loading/00.png", "/images/com.appcelerator.loading/01.png", "/images/com.appcelerator.loading/02.png", "/images/com.appcelerator.loading/03.png", "/images/com.appcelerator.loading/04.png", "/images/com.appcelerator.loading/05.png", "/images/com.appcelerator.loading/06.png", "/images/com.appcelerator.loading/07.png", "/images/com.appcelerator.loading/08.png", "/images/com.appcelerator.loading/09.png", "/images/com.appcelerator.loading/10.png", "/images/com.appcelerator.loading/11.png"], id: "loading" });

  $.__views["loading"] && $.addTopLevelView($.__views["loading"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  /**
   * @class Alloy.widgets.loading
   * The loading widget displays an animated circular icon, which can be used to indicate that the
   * application is busy with a process or loading.
   *
   * ### Usage
   *
   * To use the widget, first add it as a dependency in the `config.json` file:
   *
   *     "dependencies": {
   *         "com.appcelerator.loading":"1.0"
   *     }
   *
   * Next, add it to a view in the project, using the Require tag:
   *
   *     <Require id="loading" type="widget" src="com.appcelerator.loading"/>
   *
   * Note: the `id` attribute is a unique identfier and can be anything. `loading` is just an example.
   *
   * In the controller, use the `setOpacity` method to hide or show the loading icon.
   *
   *     // Show the loading icon.
   *     $.loading.setOpacity(1.0);
   *
   *     // Load some content...
   *
   *     // Hide the loading icon.
   *     $.loading.setOpacity(0.0);
   *
   * ### Accessing View Elements
   *
   * The following is a list of GUI elements in the widget's view.  These IDs can be used to
   * override or access the properties of these elements:
   *
   * - `loading`: Titanium.UI.ImageView for the loading icon.
   *
   * Prefix the special variable `$` and the widget ID to the element ID, to access
   * that view element, for example, `$.loading.loading` will give you access to the ImageView.
   *
   * @deprecated 1.4.0 For a maintained version of this widget, see [gitt.io](http://gitt.io/component/com.appcelerator.loading).
   */


  var args = arguments[0] || {};

  for (var k in args) {
    // Ignore Alloy hidden properties to work around ALOY-897
    if (k === 'id' || /^(?:__|#|$)/.test(k)) {continue;}

    $.loading[k] = args[k];
  }

  if (Ti.Platform.osname === 'mobileweb') {
    $.loading.duration = 100;
  }
  $.loading.start();

  /**
                                         * @method setOpacity
                                         * Sets the opacity of the loading image.
                                         * @param {Number} opacity Opacity from 0.0 (transparent) to 1.0 (opaque).
                                         */
  exports.setOpacity = function (opacity) {
    $.loading.opacity = opacity;
  };

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/widgets/com.appcelerator.loading/controllers/widget.js.map