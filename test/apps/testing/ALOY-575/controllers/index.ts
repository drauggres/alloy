import * as Alloy from 'alloy';
import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
    constructor() {
        super();

        this.index.open();
        Alloy.createWidget('test.widget').sayHello();
    }
}
