/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

var collection = Alloy.Collections.collection = new Backbone.Collection();
var models = [];
for (var i = 0; i < 20; i++) {
  models.push({
    title: 'title #' + (i + 1),
    subtitle: 'this is a boring subtitle',
    image: '/' + i + '.png' });

}
collection.reset(models);

Alloy.createController('index');
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/app.js.map