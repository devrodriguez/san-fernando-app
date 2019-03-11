import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

import { ProductService } from 'src/services/product/product.service';
import { OrderService } from 'src/services/order/order.service';
import { DishesService } from 'src/services/dishes/dishes.service';
import { Order } from 'src/models/order.model';
import { Product } from 'src/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
  providers: [ CurrencyPipe ]
})
export class CreateOrderPage implements OnInit {

  order: Order = new Order();
  dataLocal: boolean = false;
  products: Array<Product> = new Array<Product>();
  dishes: any[] = []; 
  loading: any;
  
  constructor(public alertController: AlertController, 
              public toastController: ToastController,
              public loadingController: LoadingController,
              public orderService: OrderService,
              public productService: ProductService,
              private dishesService: DishesService,
              private currencyPipe: CurrencyPipe) { 
                this.loadingOn()
                .then(() => {
                  Promise.all([
                    this.getLocalProducts(),
                    this.getDishes()
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

  ngOnInit() {
    
  }

  getRemoteProducts() {
    this.loadingOn()
    .then(() => {
      // Get products from API source    
      this.productService.getProducts().subscribe((products: Array<Product>) => {
        this.productService.deleteProducts()
        .then(data => {
          products.forEach(product => {
            this.productService.addProduct(new Product(
              Number(product.id),
              product.name,
              product.code,
              product.description,
              Number(product.price_per_unit),
              product.image_url
            ));
          });

          this.getLocalProducts();
          
        })
        .catch(err => {
          console.log(err);
        });
      }, 
      (error)=> {
        this.dataLocal = true;
        this.loadingOff();
      });
    });
  }

  getLocalProducts() {
    // Get products from local source
    return this.productService.getLocalProducts()
    .then((products: Array<Product>) => {
      this.products = products;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getDishes() {
    return this.dishesService.getDishes().subscribe((dishes: any[]) => {
      this.dishes = dishes;
    },
    (error) => {
      console.error(error);
    });
  }

  addOrderProduct(product: Product) {
    this.order.price_order += product.price_per_unit;
    this.order.products.push(product);
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

  deleteOrderProduct(product: Product, index: any) {
    this.order.price_order -= product.price_per_unit;
    this.order.products.splice(index, 1);
  }

  deleteOrder() {
    this.order = new Order();
  }

  async confirmOrder() {
    this.order.sale_date = new Date();

    const toast = await this.toastController.create({
      message: 'Orden creada correctamente',
      duration: 3000
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
