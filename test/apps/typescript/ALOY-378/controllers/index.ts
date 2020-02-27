import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var rows = [];
		var titles = ['Lord of the Rings', 'Harry Potter', 'Eragon', 'Wheel of Time', 'Narnia'];
		for (var i = 0, j = titles.length; i < j; i++) {
			rows.push(Alloy.createController('row', { title: titles[i]}).getView());
		}
		this.table.data = rows;

		function doFoo(num: number) {
			alert('Your rating = ' + num);
		}
		this.starwidget.init(doFoo);

		this.index.open();
	}
}
