import { indexAbstract } from '/controllers/indexAbstract';
import * as _ from 'underscore';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.index.open();
	}

	public doOpen() {
		var button = Ti.UI.createButton({
			right: 10,
			bottom: 10,
			left: 10,
			title: 'button'
		});
		this.index.add(button);
		this.addListener(button, 'click', function(e) {
			// __trackId testing dummy event
			e.cancelBubble = true;
		});

		// manually add event
		this.addListener(this.index, 'click', this.doWindowClick);

		this.addListener(this.index, 'click', (): void => {
			_.each(this.getListener(this.index), (listener: any) => {
				if (listener.type === 'click' &&
					listener.handler !== this.doWindowClick) {
					console.log('This is anonymous callback function');
					console.log(listener);
				}
			});
		});

		console.log('Showing the all events in this controller');
		console.log(this.getListener());
	}

// Once event fire, you do not fire again.
// All events to this window have been removed.
	doWindowClick = (): void => {
		this.removeListener(this.index);
		console.log('Removed the all events on this window');
	};

// Once event fire, you do not fire again.
// All events was nothing in this controller.
	public doClick() {
		this.removeListener();
		console.log('Removed the all events in this controller');
	}
}
