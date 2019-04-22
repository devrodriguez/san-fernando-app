export class DishModel {
    id: number;
    code: string;
    name: string;
    price: number;
    img_url: string;
    data_img: string;

    constructor(id: number, name: string, price: number, img_url: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img_url = img_url;
    }
}