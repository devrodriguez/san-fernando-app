import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/models/order.model';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Array<Order> = new Array<Order>();
  loading: any;

  constructor(private orderService: OrderService, private router: Router, private loadingController: LoadingController) {
    
  }

  ngOnInit() {
    this.loadingOn()
    .then(() => {
      this.getOrders();
    });
  }

  getOrders() {
    this.orderService.getLocalOrders()
    .then((orders: Array<Order>) => {
      this.orders = orders;
      this.loadingOff();
    })
    .catch(err => {
      console.log(err);
    });
  }

  showDetail(order: Order) {
    this.router.navigate(['order', { orderId: order.id }]);
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
