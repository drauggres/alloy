import Alloy from 'alloy';
import { BaseModel, BaseCollection } from '/model/Base';

export interface Test {
    title: string;
    subtitle: string;
    image: string;
}


export class Model extends BaseModel<Test> {}
export class Collection extends BaseCollection<Model> {}
