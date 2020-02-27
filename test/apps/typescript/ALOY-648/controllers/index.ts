import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	private TEXT = 'Click me to add more items';
	private info = Alloy.Collections.info;
	private ctr = 0;

	constructor() {
		super();


		// Create a basic section
		this.section.items = [{ properties: { title: this.TEXT } }];

		// Animation options for ListView are only supported on iOS...
		if (OS_IOS) {
			// Add "opts" to the "dataFunction" function object. In this case, we'll be
			// adding "animation" options that will be used by the ListView's generated
			// data binding code to make sure our ListItems don't animate when
			// updated.
			// TODO: There's a Titanium bug where ListItems still animate when using
			//       the ListSection.setItems() function. When TIMOB-13737 is resolved,
			//       this will work as expected and the ListItems won't animate when
			//       they are added.
			(this.loadData as any).opts = {
				animation: {
					animated: false
				}
			};
		}

		// Open the window
		this.index.open();

	}

	// Add new ListItems when ever the button is clicked
	doClick(e: Ti.UI.ListView_itemclick_Event) {
		if (e.sectionIndex === 0 && e.itemIndex === 0) {
			this.info.add({
				title: this.ctr++ === 0 ? this.TEXT : 'Row #' + this.ctr
			});
		}
	}
}
