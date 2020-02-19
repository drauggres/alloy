import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var constants = require('alloy/constants');

		this.constantsLabel.text = JSON.stringify(constants.IMPLICIT_NAMESPACES, null, '\t');

		this.index.open();
	}
}
