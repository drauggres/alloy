import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		if (this.welcomeNav) {
			this.welcomeNav.open();
		}
	}

	showContacts (e: Ti.UI.Button_click_Event) {
		Ti.API.info('showContacts: ' + e.source.title);
	}
}
