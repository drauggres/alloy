import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	public doButtonClick() {
		this.drawer.toggleRight();
	}

	public doHomeIcon() {
		this.drawer.toggleLeft();
	}
}
