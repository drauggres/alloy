import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	public clickRightButton(): void {
		alert('Right Button');
	}
}
