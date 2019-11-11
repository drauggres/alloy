import Alloy from 'alloy';
import Backbone from 'backbone';

declare class BaseController extends Backbone.EventsMixin implements Alloy.Controller {
    protected readonly roots: Ti.Proxy[];
    protected readonly __views: Record<string, Ti.UI.View|BaseController>;
    protected readonly __events: Array<{view: Ti.Proxy, type: string, handler: (e: any) => void}>;
    protected __proxyProperties: Record<string, any>;
    protected __widgetId: string|null;
    protected __controllerPath: string|null;

    constructor();

    UI: {
        create: (apiName: string, opts: any) => Ti.Proxy
    };

    public addTopLevelView(view: Ti.Proxy): void;
    public addProxyProperty(key: string, value: any): void;
    public removeProxyProperty(key: string): void;
    public getProxyProperty(name: string): any;
    public getViewEx(opts: {recurse: boolean}): Ti.Proxy|BaseController|null;
    public getProxyPropertyEx(name: string, opts: {recurse: boolean}): Ti.Proxy|BaseController|null;
    public removeView(id: string): void;

    // Alloy.Controller
    public destroy(): void;
    public getTopLevelViews(): Ti.Proxy[];
    public getView(id?: string | undefined): Ti.Proxy | BaseController;
    public getViews(): Record<string, Ti.UI.View | BaseController>;
    public createStyle<T extends Ti.Proxy>(opts: any): Dictionary<T>;
    public addClass<T extends Ti.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T> | undefined): void;
    public removeClass<T extends Ti.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T> | undefined): void;
    public resetClass<T extends Ti.Proxy>(proxy: T, classes: string | string[], opts?: Dictionary<T> | undefined): void;
    public updateViews(args: { [k: string]: any; }): BaseController;
    public addListener(proxy: Ti.Proxy, type: string, callback: (e: any) => void): string;
    public getListener(proxy?: Ti.Proxy | undefined, type?: string | undefined): any[];
    public removeListener(proxy: Ti.Proxy, type?: string | undefined, callback?: ((e: any) => void) | undefined): BaseController;
}

export = BaseController;
