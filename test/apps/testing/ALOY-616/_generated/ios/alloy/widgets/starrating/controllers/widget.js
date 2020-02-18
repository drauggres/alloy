var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'starrating/' + s :
  s.substring(0, index) + '/starrating/' + s.substring(index + 1);

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
  var Widget = new (require('/alloy/widget'))('starrating');this.__widgetId = 'starrating';
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
  $.__views["starrating"] = Ti.UI.createView(
  { layout: "horizontal", width: Ti.UI.SIZE, backgroundColor: "transparent", id: "starrating" });

  $.__views["starrating"] && $.addTopLevelView($.__views["starrating"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var args = arguments[0] || {},
  stars = [],
  rating = 0,
  max = 5;

  // public method to set the rating
  var setRating = function (newRating) {
    // save newRating to the instance's rating property
    if (newRating > max) {
      newRating = max;
    }
    rating = newRating;

    // use a loop to set the stars[i].image property
    // using the half-image for fractional values
    for (var i = 0, l = stars.length; i < l; i++) {
      if (i >= rating) {
        stars[i].image = WPATH('star_off.png');
      } else
      if (rating > i && rating < i + 1) {
        stars[i].image = WPATH('star_half.png');
      } else
      {
        stars[i].image = WPATH('star.png');
      }
    }
  };
  exports.setRating = setRating;

  // public method to get current rating
  exports.getRating = function () {
    return rating;
  };

  // private method
  var createStars = function (num, cb) {
    for (var i = 0; i < num; i++) {
      // define the image view
      var star = Alloy.createWidget('starrating', 'star').getView();

      // use a closure (self-calling function) to add
      // a click-event listener that calls setRating
      // passing the value of i+1
      (function () {
        var index = i;
        star.addEventListener('click', function () {
          setRating(index + 1);
          cb(index + 1);
        });
      })();
      // add the star image to the stars array
      stars.push(star);
      // add the star image to the instance view
      $.starrating.add(star);
    }
  };

  exports.init = function (callback) {
    var max = args.max || 5,
    initialRating = args.initialRating || 0,
    cb = callback || function () {};
    createStars(max, cb);
    setRating(initialRating);
    // can't apply view properties from the calling context when you use this widget
    // without coding them in to this controller, alloy limitation as of this writing
    _.extend($.starrating, args);

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
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/alloy/widgets/starrating/controllers/widget.js.map