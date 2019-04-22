import { Product } from "./product.model";
import { DishModel } from "./dish.model";

export class Order {
    id: number;
    price_order: number;
    products: Product[];
    dishes: DishModel[];
    sale_date: string;
    payment_method: string;

    constructor() {
        this.products = new Array<Product>();
        this.dishes = new Array<DishModel>();
        this.price_order = 0;
    }
}