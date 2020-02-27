import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	public doClick(): void {
		alert('label clicked');
	}
	public doMenuClick(): void {
		alert('menu clicked');
	}
}
