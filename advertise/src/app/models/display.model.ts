import { DisplayTypePriceModel } from './display-type-price.model';
import { SizeModel } from './size.model';

export class DisplayModel {
    id: number;
    displaySize: SizeModel;
    prices: Array<DisplayTypePriceModel>;

    constructor(p: any) {
        this.id = p.id ? p.id : 0;
        this.displaySize = p.displaySize ? p.displaySize : new SizeModel({});
        this.prices = p.prices ? p.prices : new Array<DisplayTypePriceModel>();
    }
}
