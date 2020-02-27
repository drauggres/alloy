import { indexAbstract } from '/controllers/indexAbstract';

export default class index extends indexAbstract {
	constructor() {
		super();

		var should = require('should');
		should.exist(123);
	}
}
