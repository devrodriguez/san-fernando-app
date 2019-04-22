import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';

import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Array<Order> = new Array<Order>();
  loading: any;
  orderDate: string = moment().toISOString();

  constructor(private orderService: OrderService, 
              private router: Router, 
              private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.loadingOn()
    .then(() => {
      this.getOrders(moment().format('YYYY-MM-DD'));
    });
  }

  getOrders(date: string) {
    this.orderService.getLocalOrders(date)
    .then((orders: Array<Order>) => {
      this.orders = orders;
      this.loadingOff();
    })
    .catch(err => {
      console.error(err);
    });
  }

  showDetail(order: Order) {
    this.router.navigate(['order', { orderId: order.id }]);
  }

  dateChange(event: any) {
    let date = moment(event.detail.value, 'YYYY-MM-DD').format('YYYY-MM-DD');
    this.getOrders(date);
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
