import * as Alloy from 'alloy';
import index from '/controllers/index';

Alloy.Globals.winTop = (OS_IOS && parseInt(Ti.Platform.version, 10) >= 7) ? 20 : 0;
Ti.UI.backgroundColor = '#fff';

new index();
