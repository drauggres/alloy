import * as Alloy from 'alloy';
import index from '/controllers/index';
import { Collection as TestCollection, Model as TestModel } from '/models/Test';

// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var collection = Alloy.Collections.instance('Test') as TestCollection;
var models: TestModel[] = [];
for (var i = 0; i < 20; i++) {
	models.push(new TestModel({
		title: 'title #' + (i + 1),
		subtitle: 'this is a boring subtitle',
		image: '/' + i + '.png'
	}));
}
collection.reset(models);
new index();
