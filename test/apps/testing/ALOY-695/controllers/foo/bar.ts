import * as Alloy from 'alloy';
import { barAbstract } from '/controllers/foo/barAbstract';

var ctr = 0;
export default class bar extends barAbstract {
	addNewLabel(e: Ti.UI.Window_click_Event) {
		var index = ctr % Alloy.Globals.classes.length;
		var label = this.UI.create('Label', {
			classes: Alloy.Globals.classes[index],
			id: 'newLabel' + (ctr + 1),
			text: 'this is label #' + (ctr + 1),
			touchEnabled: false
		}) as Ti.UI.Label;

		this.bar.add(label);
		ctr++;
	}
}
