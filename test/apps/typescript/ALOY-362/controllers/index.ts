import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var childView = Alloy.createController('childview');
		childView.updateViews({
			'#label': {
				text: 'I am a label',
				top: 50,
				width: Ti.UI.FILL,
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
				ellipsize: false,
				backgroundGradient: {
					type: 'linear',
					startPoint: { x: '0%', y: '50%' },
					endPoint: { x: '100%', y: '50%' },
					colors: [ { color: 'red', offset: 0.0}, { color: 'blue', offset: 0.25 }, { color: 'red', offset: 1.0 } ],
				}
			},
			'#anotherlabel': {
				text: 'I am also a label',
				foo: 'bar'
			},
			'#someNonExistentId': { text: 'I do not exist'}
		});

		this.index.add(childView.getView());

		var opts = {
			'#normallabel': {
				text: 'i used updateViews()',
				color: '#a00',
				font: {
					fontWeight: 'bold',
					fontSize: 24
				},
				bottom: 50
			}
		};

// chain calls
		this.index.add(Alloy.createController('normalchild').updateViews(opts).getView());

		this.index.add(Alloy.createController('normalchild', {
			text: 'Set the old-fashioned way'
		}).getView());

		this.index.open();
	}
}
