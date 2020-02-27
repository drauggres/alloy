import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.ScheduleGroup.open();
	}

	doOnOpen() {
		Ti.API.info('doOnOpen');
	}

	doOnFocus() {
		Ti.API.info('doOnFocus');
	}

	doSettingsMenuItem() {
		Ti.API.info('doSettingsMenuItem');
	}

	doRefresh() {
		Ti.API.info('doRefresh');
	}
}
