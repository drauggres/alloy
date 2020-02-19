import * as Alloy from 'alloy';
import * as Backbone from 'backbone';
import index from '/controllers/index';

Alloy.Collections.info = new Backbone.Collection();
new index();
