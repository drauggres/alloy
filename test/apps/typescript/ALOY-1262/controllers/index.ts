import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();

		// runtime unit tests
		if (!ENV_PROD) {
			require('specs/index')(this);
		}
	}
}
