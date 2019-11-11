import {BaseModel, BaseCollection} from 'gen/model/Base'

export interface I<%= name %> <%= schema %>

export class Model extends BaseModel<I<%= name %>> {
	// extended functions and properties go here
}

export class Collection extends BaseCollection<Model> {
	public model: new (...args: any[]) => Model = Model;
	// extended functions and properties go here

	// For Backbone v1.1.2, uncomment the following to override the
	// fetch method to account for a breaking change in Backbone.
	//
	// public fetch(options?: Backbone.CollectionFetchOptions): JQueryXHR {
	// 	options = options ? options : {};
	// 	options.reset = true;
	// 	return super.fetch(options);
	// }
}
