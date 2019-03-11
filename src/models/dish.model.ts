export class DishModel {
    id: number;
    name: string;
    price: number;
    img_url: string;

    constructor(id: number, name: string, price: number, img_url: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img_url = img_url;
    }
}