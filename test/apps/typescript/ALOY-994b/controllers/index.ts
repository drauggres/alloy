import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	doClick(e: Ti.Android.MenuItem_click_Event) {
		alert(e.source.title);
	}

	openWin2() {
		Alloy.createController('win2').getView().open();
	}

}
