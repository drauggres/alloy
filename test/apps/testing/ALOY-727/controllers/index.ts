import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		if (this.avLabel) {
			this.avLabel.text = 'This is an androidView';
		}

		this.index.open();
	}
	showOptions() {
		this.options.show();
	}
}
