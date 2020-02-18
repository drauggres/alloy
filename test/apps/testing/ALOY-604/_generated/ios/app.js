/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

var data = Alloy.Collections.data = new Backbone.Collection();
var models = [];
for (var i = 0; i < 20; i++) {
  models.push({ text: 'label #' + (i + 1) });
}
data.reset(models);
Alloy.createController('index');
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/iphone/app.js.map