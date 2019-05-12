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
  products: Product[] = new Array<Product>();
  dishes: DishModel[] = new Array<DishModel>();
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
          this.loadingOff();
        })
        .finally(() => {
          this.loadingOff();
        });
      });
  }

  async getRemoteData() {
    await this.loadingOn()
      .then(async () => {
        await Promise.all([
          this.getRemoteDishes(),
          this.getRemoteProducts()
        ])
          .then(() => {
            this.loadingOff();
          });
      })
      .catch(err => {
        this.loadingOff();
      })
      .finally(() => {
        this.loadingOff();
      });
  }

  async getRemoteDishes() {
    await this.dishesService.getDishes().subscribe((dishes: DishModel[]) => {
      this.dishesService.deleteDishes();

      let promises = [];

      dishes.forEach((dish) => {
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

      Promise.all(promises)
      .then((data) => {
        this.getLocalDishes();
      });
    },
    async (error) => {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Error al obtener platos',
        duration: 5000
      });

      toast.present();
    });
  }

  async getRemoteProducts() {
    // Get products from API source    
    await this.productService.getProducts().subscribe(async (products: Product[]) => {
      // Eliminar productos locales
      await this.productService.deleteProducts();
      
      // Arreglo de promesas para insertar productos
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
      .then(() => {
        this.getLocalProducts();
      });
    }, 
    async (error)=> {
      this.loadingOff();
      const toast = await this.toastController.create({
        message: 'Error al obtener productos',
        duration: 5000
      });

      toast.present();
    });
  }

  async getLocalProducts() {
    let promises: any[] = [];

    // Get products from local source
    let localProducts = <Product[]>await this.productService.getLocalProducts();

    this.products = localProducts;

    this.products.forEach((product: Product) => {   
      promises.push(this.nativeStorage.getItem(product.code));
    });

    await Promise.all(promises)
      .then(data => {
        for(var i = 0; i < this.products.length; i++) {
          this.products[i]['data_img'] = `data:image/png;base64,${data[i]}`;
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  async getLocalDishes() {
    let promises: any[] = [];
    let localDishes = <DishModel[]>await this.dishesService.getLocalDishes();

    this.dishes = localDishes;

    this.dishes.forEach(async (dish: DishModel) => {
      promises.push(this.nativeStorage.getItem(dish.code));
    });

    await Promise.all(promises)
    .then(data => {
      for(var i = 0; i < this.dishes.length; i++) {
        this.dishes[i]['data_img'] = `data:image\png;base64,${data[i]}`;
      }     
    })
  }

  addPartialProductOrder(product: Product) {
    this.order.price += product.price;
    this.order.products.push(product);
  }

  addPartialDishOrder(dish: DishModel) {
    this.order.price += dish.price;
    this.order.dishes.push(dish);
  }

  async createOrder() {
    if(this.order.price <= 0) {
      const alertNoTotal = await this.alertController.create({
        header: 'Orden',
        message: 'Seleccione por lo menos un producto',
        buttons: ['Aceptar']
      });

      await alertNoTotal.present();
      return;
    }

    this.presentActionSheet();
  }

  async alertDeliver() {
    const deliver = await this.alertController.create({
      header: 'Domiciliario',
      message: 'Seleccione la empresa de domicilios',
      buttons: [
        {
          text: 'Crear',
          handler: data => {
            console.log('Carrier', data);
            this.order.carrier = data;
            this.confirmOrder();
          }
        }
      ],
      inputs: [
        {
          checked: true,
          label: 'Rappi',
          type: 'radio',
          value: 'RP'
        },
        {
          label: 'Uber Eats',
          type: 'radio',
          value: 'UB'
        }
      ]
    });

    deliver.present();
  }

  deletePartialProductOrder(product: Product, index: number) {
    this.order.price -= product.price;
    this.order.products.splice(index, 1);
  }

  deletePartialDishOrder(dish: DishModel, index: number) {
    this.order.price -= dish.price;
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

    await this.orderService.addLocalOrder(this.order);

    this.order = new Order();
    toast.present();
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
