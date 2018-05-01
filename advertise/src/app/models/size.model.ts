export class SizeModel {
    id: number;
    width: number;
    height: number;

    constructor(p: any) {
        this.id = p.id ? p.id : 0;
        this.width = p.width ? p.width : 0;
        this.height = p.height ? p.height : 0;
    }
}
