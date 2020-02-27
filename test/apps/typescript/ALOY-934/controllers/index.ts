import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	public showOptions(): void {
		this.dialog.show();
	}
}
