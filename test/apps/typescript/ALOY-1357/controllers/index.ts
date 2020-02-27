import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.addEventListener('click', (): void => {
			this.popup && this.popup.show({view: this.lbl});
		});

		this.index.open();
	}

	popupClick(e: Ti.UI.iOS.MenuPopup_click_Event): void {
		alert(e);
	}
}
