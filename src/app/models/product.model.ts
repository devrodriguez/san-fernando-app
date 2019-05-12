export class Product {
    id: number;
    name: string;
    code: string;
    description: string;
    price: number;
    img_url: string;
    data_img: string;

    constructor(id: number, name: string, code: string, description: string, price: number, img_url: string) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.price = price;
        this.img_url = img_url;
        this.data_img = "";
    }
}