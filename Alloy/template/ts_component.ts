import Alloy from 'alloy';
<%= importCode %>

<%= typesCode %>

export abstract class <%= className %> extends BaseController {
    protected readonly <%= parentVariable %>: any;
    protected readonly <%= modelVariable %>: any;
    protected readonly <%= itemTemplateVariable %>: any;

<%= properties %>

    public constructor(protected args?: any) {
        super();
        this.__controllerPath = '<%= controllerPath %>';

        this.<%= parentVariable %> = args && args['<%= parentVariable %>'] ? args['<%= parentVariable %>'] : null;
        this.<%= modelVariable %> = args && args['<%= modelVariable %>'] ? args['<%= modelVariable %>'] : null;
        this.<%= itemTemplateVariable %> = args && args['<%= itemTemplateVariable %>'] ? args['<%= itemTemplateVariable %>'] : null;

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
