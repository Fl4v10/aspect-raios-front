export enum TypePriceEnum {
    Cheap = 1,
    Normal = 2
}

export class DisplayTypePriceModel {
    id: number;
    price: number;
    typePrice: TypePriceEnum;

    constructor(p: any) {
        this.id = p.id ? p.id : 0;
        this.price = p.price ? p.price : 0;
        this.typePrice = p.typePrice ? p.typePrice : TypePriceEnum.Normal;
    }
}
