import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	fn(e: Ti.UI.iOS.PreviewContext_peek_Event | Ti.UI.iOS.PreviewAction_click_Event) {
		Ti.API.info('sectionIndex: ' + e.sectionIndex);
		Ti.API.info('itemIndex: ' + e.itemIndex);
	}
}
