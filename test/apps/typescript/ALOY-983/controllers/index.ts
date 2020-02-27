import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	openPopover() {
		var popover = Alloy.createController('popover').getView();
		popover.show({view: this.button1});
	}
	openPopoverWin() {
		var popover = Alloy.createController('popover_win').getView();
		popover.show({view: this.button2});
	}
	openPopoverNavWin() {
		var popover = Alloy.createController('popover_navwin').getView();
		popover.show({view: this.button3});
	}
}
