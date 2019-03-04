import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/services/order/order.service';
import { Product } from 'src/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  products: Array<Product> = new Array<Product>();
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
      .then((orderDetail: Product[]) => {
        this.loadingOff();
        this.products = orderDetail;
      })
      .catch(err => {
        console.log(err);
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
