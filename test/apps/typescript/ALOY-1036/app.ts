import * as Alloy from 'alloy';
import index from '/controllers/index';

Alloy.Globals.custom1 = true;
Alloy.Globals.custom2 = false;

new index();
