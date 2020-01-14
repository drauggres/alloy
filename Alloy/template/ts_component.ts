import Alloy from 'alloy';
import BaseController from '/controllers/BaseController';
<%= importCode %>

<%= typesCode %>

function __processArg(obj: any, key: string): any | null {
    let arg = null;
    if (obj) {
        arg = obj[key] || null;
    }
    return arg;
}

export abstract class <%= className %> extends BaseController {
// views available via `$.viewId`
<%= properties %>

    public constructor(protected args?: any) {
        super();
        this.__controllerPath = '<%= controllerPath %>';

        const <%= parentVariable %>: any = args ? __processArg(args, '<%= parentVariable %>') : null;
        const <%= modelVariable %>: any = args ? __processArg(args, '<%= modelVariable %>') : null;
        const <%= itemTemplateVariable %>: any = args ? __processArg(args, '<%= itemTemplateVariable %>') : null;

        // Generated code that must be executed before all UI and/or
        // controller code. One example is all model and collection
        // declarations from markup.
        // <precode>
<%= preCode %>
        // </precode>

        // Generated UI code
        // <viewCode>
<%= viewCode %>
        // </viewCode>

        // Generated code that must be executed after all UI and
        // controller code. One example deferred event handlers whose
        // functions are not defined until after the controller code
        // is executed.
        // <postCode>
<%= postCode %>
        // </postcode>
    }

    public destroy(): void {
        <%= destroyCode %>
    }

// <dataFunctions>
<%= dataFunctionsCode %>
// </dataFunctionsCode>

// Abstract Methods for events listeners
// <abstractMethods>
<%= abstractMethods %>
// </abstractMethods>
}
