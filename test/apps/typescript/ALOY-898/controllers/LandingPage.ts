import { LandingPageAbstract } from '/controllers/LandingPageAbstract';

export default class LandingPage extends LandingPageAbstract {
	constructor() {
		super();
	}
	closeWindow() {
		this.landingPageWindow.close();
	}
}
