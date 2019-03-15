import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

import { ProductService } from 'src/services/product/product.service';
import { OrderService } from 'src/services/order/order.service';
import { DishesService } from 'src/services/dishes/dishes.service';
import { Order } from 'src/models/order.model';
import { Product } from 'src/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { DishModel } from 'src/models/dish.model';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
  providers: [ CurrencyPipe ]
})
export class CreateOrderPage implements OnInit {

  order: Order = new Order();
  dataLocal: boolean = false;
  products: Product[] = [];
  dishes: DishModel[] = [];
  loading: any;
  
  constructor(public alertController: AlertController, 
              public toastController: ToastController,
              public loadingController: LoadingController,
              public orderService: OrderService,
              public productService: ProductService,
              private dishesService: DishesService,
              private currencyPipe: CurrencyPipe) { 
                
              }

  ngOnInit() {
    this.loadingOn()
      .then(() => {
        Promise.all([
          this.getLocalProducts(),
          this.getLocalDishes()
        ])
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.error('Error on load data');
        })
        .finally(() => {
          this.loadingOff();
        });
      });
  }

  async getRemoteData() {
    return await this.loadingOn()
    .then(() => {
      Promise.all([
        this.getRemoteProducts(),
        this.getRemoteDishes()
      ])
      .then(() => {
        this.getLocalProducts();
        this.getLocalDishes();
      })
      .finally(() => {
        this.loadingOff();
      });
    });
  }

  async getRemoteProducts() {
    // Get products from API source    
    return await this.productService.getProducts().subscribe((products: Product[]) => {
      this.productService.deleteProducts()
      .then(() => {
        products.forEach(product => {
          this.productService.addProduct(new Product(
            product.id,
            product.name,
            product.code,
            product.description,
            product.price,
            product.img_url
          ));
        });          
      })
      .catch(err => {
        console.log(err);
      });
    }, 
    (error)=> {
      this.loadingOff();
    });
  }
  
  async getRemoteDishes() {
    return await this.dishesService.getDishes().subscribe((dishes: DishModel[]) => {
      this.dishesService.deleteDishes()
      .then(() => {
        dishes.forEach(dish => {
          this.dishesService.addDish(new DishModel(
            dish.id, 
            dish.name, 
            dish.price, 
            dish.img_url
          ));
        });
      });
    },
    (error) => {
      console.error(error);
    });
  }

  async getLocalProducts() {
    // Get products from local source
    return await this.productService.getLocalProducts()
    .then((products: Product[]) => {
      this.products = products;
    })
    .catch(err => {
      console.error(err);
    });
  }

  async getLocalDishes() {
    return await this.dishesService.getLocalDishes()
    .then((dishes: DishModel[]) => {
      this.dishes = dishes;
    })
    .catch(err => {
      console.error(err);
    });
  }

  addPartialProductOrder(product: Product) {
    this.order.price_order += product.price;
    this.order.products.push(product);
  }

  addPartialDishOrder(dish: DishModel) {
    this.order.price_order += dish.price;
    this.order.dishes.push(dish);
  }

  async createOrder() {
    if(this.order.price_order <= 0) {
      const alertNoTotal = await this.alertController.create({
        header: 'Orden',
        message: 'Seleccione por lo menos un producto',
        buttons: ['Aceptar']
      });

      await alertNoTotal.present();
      return;
    }

    const alertCreateOrder = await this.alertController.create({
      header: 'Orden',
      subHeader: 'Informacion de su orden',
      message: `El total de la orden es ${this.currencyPipe.transform(this.order.price_order, 'COP', '$', '1.0')}`,
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'primary',
          handler: () => {
            this.confirmOrder();
          }
        },
        {
          cssClass: 'secondary',
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alertCreateOrder.present();
  }

  deletePartialProductOrder(product: Product, index: number) {
    this.order.price_order -= product.price;
    this.order.products.splice(index, 1);
  }

  deletePartialDishOrder(dish: DishModel, index: number) {
    this.order.price_order -= dish.price;
    this.order.dishes.splice(index, 1);
  }

  deletePartialOrder() {
    this.order = new Order();
  }

  async confirmOrder() {
    this.order.sale_date = new Date();

    const toast = await this.toastController.create({
      message: 'Orden creada correctamente',
      duration: 5000
    });

    this.orderService.addLocalOrder(this.order)
    .then((data) => {
  
      this.order = new Order();
  
      toast.present();
    })
    .catch(err => {
      console.log(err);
    });
  }

  async loadingOn() {
    this.loading = await this.loadingController.create({
      message: 'Cargando'
    });

    return await this.loading.present();
  }

  async loadingOff() {
    return await this.loading.dismiss();
  }

}
