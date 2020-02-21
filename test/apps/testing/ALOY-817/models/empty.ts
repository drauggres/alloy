import { BaseModel, BaseCollection } from '/model/Base';

export interface Empty {
}


export class Model extends BaseModel<Empty> {}
export class Collection extends BaseCollection<Model> {}
