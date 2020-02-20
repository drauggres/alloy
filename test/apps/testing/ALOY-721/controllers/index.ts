import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	private idx = 0;
	private classes = [
		['darkblue', 'medium'],
		['darkblue', 'medium', 'red'], // red will take precedence due to TSS ordering
		['lightblue', 'huge'],
		'red small',
		['darkblue', 'medium', 'left'],
		'lightblue small right',
		'red huge crazyshadow'
	];

	constructor() {
		super();

		this.resetClasses();

		this.index.open();
	}

	public resetClasses(): void {
		var theClass = this.classes[this.idx++];
		this.resetClass(this.tester, theClass);
		this.currentClasses.text = JSON.stringify(theClass);
		this.idx >= this.classes.length && (this.idx = 0);
	}
}
