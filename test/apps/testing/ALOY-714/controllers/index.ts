import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	doLeftClick(): void {
		alert('Left button clicked');
	}
	doRightClick(): void  {
		alert('Right button clicked');
	}
}
