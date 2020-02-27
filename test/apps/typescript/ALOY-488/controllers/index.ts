import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.starwidget.init(this.doAlert);
		this.index.open();
	}

	doClick(): void {
		alert(this.label.text);
	}

	doAlert = (num: number): void => {
		alert('Your rating = ' + num);
	};
}
