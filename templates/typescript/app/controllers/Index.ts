import Alloy from 'alloy';
import { IndexAbstract } from '/controllers/IndexAbstract';

export class Index extends IndexAbstract {
	constructor() {
		super();
		this.Index.open();
	}
	public doClick() {
		alert(`${this.label.text} ${Alloy.Globals.myGlobal}`);
	}
}
