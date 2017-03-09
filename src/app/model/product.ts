export class Product{
    constructor(public title:string, public description:string, public photo:string, public price:number, public stock:number){}

    static create(obj: any) {
        return new Product(obj.title, obj.description, obj.photo, obj.price, obj.stock);
    }
}