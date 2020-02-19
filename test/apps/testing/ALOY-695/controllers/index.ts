import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

var ctr = 0;
export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}
	addNewLabel(e: Ti.UI.Window_click_Event) {
		var index = ctr % Alloy.Globals.classes.length;
		var label = this.UI.create('Label', {
			classes: Alloy.Globals.classes[index],
			id: 'newLabel' + (ctr + 1),
			text: 'this is label #' + (ctr + 1),
			touchEnabled: false
		}) as Ti.UI.Label;

		this.index.add(label);
		ctr++;
	}
	openFooBar(e: Ti.UI.Label_click_Event) {
		Alloy.createController('foo/bar').getView().open();
	}
}
