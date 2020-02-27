import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	private currentTab = 0;
	constructor() {
		super();

		this.index.open();
	}

	doClick(e: Ti.Android.MenuItem_click_Event) {
		alert('tab ' + this.currentTab + ': ' + e.source.title);
	}

	setCurrentTab(e: Ti.UI.TabGroup_focus_Event) {
		this.currentTab = e.index + 1;
	}
}
