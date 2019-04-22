import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { OrderService } from 'src/app/services/order/order.service';
import { Product } from 'src/app/models/product.model';
import { DishModel } from 'src/app/models/dish.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  products: Array<Product> = new Array<Product>();
  dishes: DishModel[] = [];
  loading: any;
  
  constructor(private orderService: OrderService, private route: ActivatedRoute, private loadingController: LoadingController) {
    this.loadingOn()
    .then(() => {
      this.getOrderDetail();
    });
  }

  ngOnInit() {}

  getOrderDetail() {

    this.route.paramMap.subscribe(params => {

      this.orderService.getLocalOrderDetail(params.get('orderId'))
      .then(data => {
        this.dishes = data[0];
        this.products = data[1];
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.loadingOff();
      });
      
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
