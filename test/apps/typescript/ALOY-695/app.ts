import * as Alloy from 'alloy';
import index from '/controllers/index';

Alloy.Globals.classes = [
	[],
	['big'],
	['blue'],
	'shadow',
	['shadow'],
	['shadow', 'big'],
	['big', 'shadow'],
	['big', 'blue', 'shadow'],
	'big blue shadow'
];

new index();
