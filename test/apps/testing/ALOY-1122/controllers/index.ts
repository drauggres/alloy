import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	doClick(): void {
		alert('The sum of 1+2 is ' + require('util').sum(1, 2));
	}
}
