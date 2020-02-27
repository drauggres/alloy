import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	openWindow() {
		Alloy.createController('LandingPage').getView().open({
			animated: true,
			modal: true
		});
	}
}
