/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

var names = Alloy.Collections.name = Alloy.createCollection('name');
Alloy.Collections.info = Alloy.createCollection('info');

// fetch currently persisted name models
names.fetch();

// see if we already loaded the data
if (!names.length) {

  // load some dummy data into the app
  for (var i = 1; i <= 20; i++) {
    createModel('name', i);
    createModel('info', i);
  }

}

function createModel(type, index) {
  // create model attributes
  var o = { id: index };
  o[type] = type + ' ' + index;

  // create the model
  var model = Alloy.createModel(type, o);

  // add the model to the appropriate collection
  Alloy.Collections[type].add(model);

  // persist model
  model.save();
}

Alloy.createController('index');
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/app.js.map