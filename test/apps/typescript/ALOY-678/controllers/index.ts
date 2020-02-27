import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var items: any[] = [];
		for (var i = 0; i < 10; i++) {
			items.push({
				image: {
					image: '/appc.png'
				},
				label: {
					text: 'auto-row #' + (i + 1)
				},
				button: {
					title: i + 1
				}
			});
		}
		this.section.items = this.section.items.concat(items);

		this.index.open();
	}
}
