import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();

		this.map2.fireEvent('click');
		Alloy.Collections.Empty.trigger('change');
		Alloy.Models.Empty.trigger('change');
		this.anotherModel.trigger('change');
	}

	mapClick() {
		Ti.API.info('map clicked');
	}

	windowClick() {
		Ti.API.info('window clicked');
	}

	modelChange() {
		Ti.API.info('model change');
	}

	anotherModelChange() {
		Ti.API.info('another model change');
	}

	collectionChange() {
		Ti.API.info('collection change');
	}

	emptyInit() {
		Ti.API.info('empty controller init');
	}
}
