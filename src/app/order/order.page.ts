import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  totalOrder:number = 0;
  order: Array<any> = [];
  rows: Array<any> = [1, 2]; 
  products: Array<any> = new Array();
  
  constructor(public alertController: AlertController, 
              public toastController: ToastController,
              public productService: ProductService) { 
                
              }

  ngOnInit() {
  }

  getProducs() {
    
    this.productService.getProducts().subscribe((products: Array<any>) => {

      //this.products = products;

      products.forEach(item => {
        this.productService.addProduct({
          name: item.name,
          description: item.description,
          price_per_unit: item.price_per_unit,
          picture_url: item.picture_url
        });
      });
    });

    this.productService.getLocalProducts()
    .then((data: Array<any>) => {
      this.products = data;
    });
  }

  addOrderProduct(product:any) {
    this.totalOrder += parseFloat(product.price_per_unit);
    this.order.push(product);
  }

  async createOrder() {
    if(this.totalOrder <= 0) {
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
      message: `El total de la orden es ${this.totalOrder}`,
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

  deleteOrderProduct(product: any, index: any) {
    this.totalOrder -= parseFloat(product.price_per_unit);
    this.order.splice(index, 1);
  }

  deleteOrder() {
    this.totalOrder = 0;
    this.order = [];
  }

  async confirmOrder() {
    this.totalOrder = 0;
    this.order = [];



    const toast = await this.toastController.create({
      message: 'Orden creada correctamente',
      duration: 3000
    });

    toast.present();
  }

}
