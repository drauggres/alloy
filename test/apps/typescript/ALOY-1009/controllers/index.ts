import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.addEventListener('click', () => {
			this.options.show();
		});
		this.index.open();
	}
}
