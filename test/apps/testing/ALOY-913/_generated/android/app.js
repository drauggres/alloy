/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

if (false || true) {
  Alloy.Collections.todo = Alloy.createCollection('todo');
  Alloy.Globals.top = 0;
  Alloy.Globals.tableTop = '50dp';

  try {
    // check for iOS7
    if (false && parseInt(Titanium.Platform.version.split('.')[0], 10) >= 7) {
      Alloy.Globals.top = '20dp';
      Alloy.Globals.tableTop = '70dp';
    }
  } catch (e) {
    // catch and ignore
  }
}

Alloy.createController('index');
//# sourceMappingURL=file:///home/s.volkov/Proj/alloy/test/projects/Harness/build/map/Resources/android/app.js.map