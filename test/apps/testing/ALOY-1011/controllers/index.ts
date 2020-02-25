import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	public doClick(): void {
		alert('label clicked');
	}
	public doMenuClick1(): void {
		alert('menu 1 clicked');
	}
	public doMenuClick2(): void {
		alert('menu 2 clicked');
	}
}
