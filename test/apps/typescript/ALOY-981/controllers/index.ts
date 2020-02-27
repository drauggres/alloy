import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	public btnClick(e: Ti.UI.Button_click_Event): void {
		alert(e.source.title + ' is clicked');
	}

}
