import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		if (!this.info || ! this.index) {
			return;
		}
		if (OS_IOS || OS_MOBILEWEB) {
			this.info.text = 'Click the rightNavButton to "save"';
		} else if (OS_ANDROID) {
			this.info.text = 'Click the menu button to "save"';
		} else {
			this.info.text = 'This app supported on Android, MobileWeb, and iOS only.';
		}

		this.index.open();
	}
	doSave(): void {
		alert('save');
	}
}
