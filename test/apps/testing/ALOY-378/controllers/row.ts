import { rowAbstract } from '/controllers/rowAbstract';

export default class row extends rowAbstract {
    constructor(args: {title?: string} = {}) {
        super();

        // Here was incorrect assignment in the original code
        // We keeping it with explicit  type casting
        this.row.title = args.title as string;
    }
}
