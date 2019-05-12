import { Product } from "./product.model";
import { DishModel } from "./dish.model";

export class Order {
    id: number;
    price: number;
    products: Product[];
    dishes: DishModel[];
    sale_date: string;
    payment_method: string;
    carrier: string;

    constructor() {
        this.products = new Array<Product>();
        this.dishes = new Array<DishModel>();
        this.price = 0;
    }
}