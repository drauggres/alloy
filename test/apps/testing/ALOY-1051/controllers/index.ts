import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	doClick() {
		alert(JSON.stringify(this.createStyle({
			classes: ['family', 'size']
		})));
	}
}
