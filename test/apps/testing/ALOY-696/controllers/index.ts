import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	addLabels(e: Ti.UI.Window_click_Event) {
		this.scroller.add(Ti.UI.createLabel(Alloy.createStyle('index', {
			apiName: 'Ti.UI.Label',
			text: 'Alloy.createStyle() + Ti.UI.createLabel()'
		})));

		this.scroller.add(Ti.UI.createLabel(this.createStyle({
			apiName: 'Ti.UI.Label',
			text: '$.createStyle() + Ti.UI.createLabel()'
		})));

		this.scroller.add(Alloy.UI.create('index', 'Ti.UI.Label', {
			text: 'Alloy.UI.create()'
		}) as Ti.UI.Label);

		this.scroller.add(this.UI.create('Ti.UI.Label', {
			text: '$.UI.create()'
		}) as Ti.UI.Label);

		this.scroller.add(Alloy.createWidget('alloy.testWidget', 'labelmaker').createLabels());
	}
}
