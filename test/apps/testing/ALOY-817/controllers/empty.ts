import { emptyAbstract } from '/controllers/emptyAbstract';

export default class empty extends emptyAbstract {
	constructor(args?: any) {
		super(args);

		this.empty.fireEvent('click');

		setTimeout(() => {
			this.trigger('init');
		}, 2000);
	}

	buttonClick(e: Ti.UI.Button_click_Event) {
		e.cancelBubble = true;
		Ti.API.info('button clicked');
	}
}
