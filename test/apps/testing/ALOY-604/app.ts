import * as Alloy from 'alloy';
import index from '/controllers/index';
import * as Backbone from 'backbone';

var data = Alloy.Collections.data = new Backbone.Collection();
var models: any[] = [];
for (var i = 0; i < 20; i++) {
	models.push({text: 'label #' + (i + 1)});
}
data.reset(models);

new index();
