import * as Alloy from 'alloy';
import * as Backbone from 'backbone';
import { indexAbstract } from '/controllers/indexAbstract';
import { Model as TestModel, Test } from '/models/Test';

export default class index extends indexAbstract {
	constructor() {
		super();

		Alloy.Collections.Test.trigger('change');
		this.index.open();
	}

	doUpper(model: TestModel): Test {
		// Need to convert the model to a JSON object
		var transform = model.toJSON();
		transform.title = transform.title.toUpperCase();
		Ti.API.info('>>> transforming the title');
		return transform;
	}
}
