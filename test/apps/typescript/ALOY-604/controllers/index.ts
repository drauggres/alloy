import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		Alloy.Collections.data.trigger('change');
		this.index.open();
	}

	test() {
		Ti.API.info('test');
	}

	doSomething(): void {
		Ti.API.info('do something');
	}
}
