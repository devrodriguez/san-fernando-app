import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { DishesService } from 'src/app/services/dishes/dishes.service';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { DishModel } from 'src/app/models/dish.model';

import { CurrencyPipe } from '@angular/common';

import * as moment from 'moment';
import { ImageService } from 'src/app/services/media/image.service';
import { promise } from 'protractor';

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
              private nativeStorage: NativeStorage,
              public orderService: OrderService,
              public productService: ProductService,
              private dishesService: DishesService,
              private imageService: ImageService,
              private actionSheetController: ActionSheetController) { 
                
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

  getRemoteData() {
    this.loadingOn()
    .then(async () => {
      await Promise.all([
        this.getRemoteDishes(),
        this.getRemoteProducts()
      ])
      .then(() => {
        this.loadingOff();
      });
    })
    .finally(() => {
      this.loadingOff();
    });
  }

  async getRemoteDishes() {
    await this.dishesService.getDishes().subscribe(async (dishes: DishModel[]) => {
      await this.dishesService.deleteDishes()
      .then(async () => {
        let promises = [];

        dishes.forEach(async (dish) => {
          promises.push(this.dishesService.addDish(new DishModel(
            dish.id, 
            dish.name, 
            dish.price,
            dish.img_url
          )));

          // Add local storage image
          this.nativeStorage.setItem(dish.code, dish.data_img)
          .then(() => {
            console.log('Dish stored'+dish.code);
          })
          .catch(err => {
            console.log(err);
          });
        });

        await Promise.all(promises)
        .then(async (data) => {
          await this.getLocalDishes();
        });
      });
    },
    (error) => {
      console.error(error);
    });
  }

  async getRemoteProducts() {
    // Get products from API source    
    await this.productService.getProducts().subscribe(async (products: Product[]) => {
      await this.productService.deleteProducts()
      .then(async () => {
        let promises = [];

        products.forEach((product) => {
          promises.push(this.productService.addProduct(
            new Product(
              product.id,
              product.name,
              product.code,
              product.description,
              product.price,
              product.img_url
          )));

          // Add local storage image
          this.nativeStorage.setItem(product.code, product.data_img)
          .then(() => {
            console.log('Product stored'+product.code);
          })
          .catch(err => {
            console.log(err);
          });
        });
        
        await Promise.all(promises)
        .then(async (data) => {
          await this.getLocalProducts();
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

  async getLocalProducts() {
    let promises: any[] = [];
    
    // Get products from local source
    await this.productService.getLocalProducts()
    .then(async (products: Product[]) => {
      await this.products.forEach((product: Product) => {   
        promises.push(this.nativeStorage.getItem(product.code));
      });

      await Promise.all(promises)
      .then(data => {
        
        this.products = products;

        for(var i = 0; i <= this.products.length; i++) {
          this.products[i].data_img = 'data:image/png;base64,' + data[i];
        }
      })
      .catch(err => {
        console.error(err);
      })
      
    })
    .catch(err => {
      console.error(err);
    });
  }

  async getLocalDishes() {
    await this.dishesService.getLocalDishes()
    .then(async (dishes: DishModel[]) => {
      await this.dishes.forEach(async (dish: DishModel) => {
        await this.nativeStorage.getItem(dish.code)
        .then(async item => {
          dish.data_img = `data:image\png;base64,${item}`;
        });
      });

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

    /*
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
    */

    this.presentActionSheet();
  }

  async alertDeliver() {
    const deliver = await this.alertController.create({
      header: 'Domiciliario',
      message: 'Seleccione la empresa de domicilios',
      buttons: [
        {
          text: 'Crear',
          handler: () => {
            this.confirmOrder();
          }
        }
      ],
      inputs: [
        {
          name: 'Rappi',
          type: 'radio'
        }
      ]
    });

    deliver.present();
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
    this.order.sale_date = moment().format('YYYY-MM-DD hh:mm:ss');

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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Metodo Pago',
      buttons: [
        {
          text: 'Efectivo',
          icon: 'cash',
          handler: () => {
            this.order.payment_method = 'E';
            this.confirmOrder();
          }
        },
        {
          text: 'Tarjeta',
          icon: 'card',
          handler: () => {
            this.order.payment_method = 'T';
            this.confirmOrder();
          }
        },
        {
          text: 'Domicilio',
          icon: 'bicycle',
          handler: () => {
            this.order.payment_method = 'D';
            this.alertDeliver();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

}
