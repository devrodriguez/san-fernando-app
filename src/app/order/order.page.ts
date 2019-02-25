import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/services/product/product.service';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/models/order.model';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  order: Order = new Order();
  rows: Array<any> = [1, 2]; 
  products: Array<Product> = new Array<Product>();
  
  constructor(public alertController: AlertController, 
              public toastController: ToastController,
              public orderService: OrderService,
              public productService: ProductService) { 
                
              }

  ngOnInit() {
  }

  getProducs() {
    console.log('Get products');

    // Get products from API source
    this.productService.getProducts().subscribe((products: Array<Product>) => {
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
    });

    // Get products from local source
    this.productService.getLocalProducts()
    .then((products: Array<Product>) => {
      this.products = products;
    });
  }

  addOrderProduct(product: Product) {
    console.log(product);
    console.log(this.order);
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
      message: `El total de la orden es ${this.order.price_order}`,
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
      console.log(data);
  
      this.order = new Order();
  
      toast.present();
    })
    .catch(err => {
      console.log(err);
    });
  }

}
