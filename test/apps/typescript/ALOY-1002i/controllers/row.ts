import { rowAbstract } from '/controllers/rowAbstract';

export default class row extends rowAbstract {
    constructor(args: {title: string}) {
        super();

        this.row.title = args.title;
    }
}
