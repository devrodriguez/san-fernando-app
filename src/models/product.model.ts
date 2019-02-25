export class Product {
    id: number;
    name: string;
    code: string;
    description: string;
    price_per_unit: number;
    image_url: string;

    constructor(id: number, name: string, code: string, description: string, price_per_unit: number, image_url: string) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.price_per_unit = price_per_unit;
        this.image_url = image_url;
    }
}