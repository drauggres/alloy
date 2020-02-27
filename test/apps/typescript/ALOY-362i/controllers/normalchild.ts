import { normalchildAbstract } from '/controllers/normalchildAbstract';

export default class normalchild extends normalchildAbstract {
    constructor(args: { text?: string } = {}) {
        super(args);

        if (args) {
            // Here was incorrect assignment in the original code
            // We keeping it with explicit type casting
            this.normallabel.text = args.text as string;
        }
    }
}
