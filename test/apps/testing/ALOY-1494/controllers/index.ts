import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	stepperChanged(e: Ti.UI.iOS.Stepper_change_Event) {
		alert('Value: ' + e.value);
	}
}
