import { EmptyAbstract } from '/controllers/EmptyAbstract';

export default class Empty extends EmptyAbstract {
	constructor(args?: any) {
		super(args);

		this.Empty.fireEvent('click');

		setTimeout(() => {
			this.trigger('init');
		}, 2000);
	}

	buttonClick(e: Ti.UI.Button_click_Event) {
		e.cancelBubble = true;
		Ti.API.info('button clicked');
	}
}
