import Alloy from 'alloy';
import BaseController from '/controllers/BaseController';

export default class index extends BaseController {
    constructor() {
        super();

        var win2 = Alloy.createController('win2').getView();
        win2.open();
    }
}
