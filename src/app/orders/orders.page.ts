import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService) {
    setTimeout(() => {
      this.getOrders();  
    }, 1000);
  }

  ngOnInit() {
  }

  getOrders() {
    this.orderService.getLocalOrders()
    .then((orders: Array<Order>) => {
      this.orders = orders;
    })
    .catch(err => {
      console.log(err);
    });
  }

  showDetail() {
    
  }

}
