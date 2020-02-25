import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var moreItems: ListDataItem[] = [];
		for (var i = 0; i < 5; i++) {
			moreItems.push({
				template: 'template',
				type:{
					text: 'row ' + i
				}
			} as ListDataItem);
		}

		this.list.sections[0].items = this.list.sections[0].items.concat(moreItems);
		this.index.open();
	}
}

