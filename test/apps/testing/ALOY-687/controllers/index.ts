import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
    constructor() {
        super();

        this.index.open();

        Ti.API.info(JSON.stringify(require('alloy/styles/index')));
    }
}
