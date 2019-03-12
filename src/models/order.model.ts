import { Product } from "./product.model";
import { DishModel } from "./dish.model";

export class Order {
    id: number;
    price_order: number;
    products: Product[];
    dishes: DishModel[];
    sale_date: Date;

    constructor() {
        this.products = new Array<Product>();
        this.price_order = 0;
    }
}