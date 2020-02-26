import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.win.open();
	}
	
	public expand(): void {
		this.item3 && this.item3.expandActionView();
	}

	public collapse(): void  {
		this.item3 && this.item3.collapseActionView();
	}

	public report(e: any): void {
		Ti.API.info(e.type);
		this.item3 && Ti.API.info(this.item3.actionViewExpanded.toString());
	}
}

