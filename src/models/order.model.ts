import { Product } from "./product.model";

export class Order {
    id: number;
    price_order: number;
    products: Array<Product>;
    sale_date: Date;

    constructor() {
        this.products = new Array<Product>();
        this.price_order = 0;
    }
}