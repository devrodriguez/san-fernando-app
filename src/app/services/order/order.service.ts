import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';

import { DishModel } from 'src/app/models/dish.model';
import { DishesService } from '../dishes/dishes.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private conn: SQLiteObject;
  private isOpen: boolean;

  constructor(private sqlite: SQLite, 
              private dishService: DishesService, 
              private productService: ProductService) {
    
    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {
        this.conn = conn;

        console.log('Order db connection created');
        
        //Create Orders table
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Orders(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sale_date DATE, price_order DECIMAL(18, 2), payment_method VARCHAR(5))', [])
        .then(data => {
          console.log('Se creo la tabla Orders');
        })
        .catch(error => {
          console.log('Error al crear tabla Orders');
          console.log(error);
        });

        //Create OrderDetail table
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS OrderDetail(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id NUMBER, dish_id NUMBER, product_id NUMBER)', [])
        .then(data => {
          console.log('Se creo la tabla [OrderDetail]');
        })
        .catch(error => {
          console.log('Error al crear tabla [OrderDetail]');
          console.log(error);
        });

        this.isOpen = true;
      });
    }
  }

  addLocalOrder(order: Order) {
    console.log(order.sale_date);
    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Orders(sale_date, price_order, payment_method) VALUES(?, ?, ?)', [order.sale_date, order.price_order, order.payment_method])
      .then(dataOrder => {

        // Insert products
        order.products.forEach((product: Product) => {

          this.conn.executeSql('INSERT INTO OrderDetail(order_id, product_id) VALUES(?, ?)', [dataOrder.insertId, product.id])
          .then(data => {
            console.log('OrderDetail data inserted');
          })
          .catch(err => {
            console.error('OrderDetail error');
          });
        });

        // Insert dishes
        order.dishes.forEach((dish: DishModel) => {
          this.conn.executeSql('INSERT INTO OrderDetail(order_id, dish_id) VALUES(?, ?)', [dataOrder.insertId, dish.id])
          .then(data => {
            console.log('Dish inserted in order');
          })
          .catch(err => {
            console.error('Error on insert dish on order');
          });
        });

        resolve(dataOrder);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getLocalOrders(date?: string) {
    
    return new Promise((resolve, reject) => {

      let query: string = "SELECT id, strftime('%d/%m/%Y %H:%M:%S', sale_date) sale_date, price_order, payment_method FROM Orders WHERE strftime('%Y-%m-%d', sale_date) = '" + date + "' ORDER BY sale_date ASC";
      
      this.conn.executeSql(query, [])
      .then(orders => {

        let newOrders: Order[] = [];

        for(var i = 0; i < orders.rows.length; i++) {
          let newOrder: Order = new Order();
          newOrder.id = orders.rows.item(i).id;
          newOrder.sale_date = orders.rows.item(i).sale_date;
          newOrder.price_order = orders.rows.item(i).price_order;
          newOrder.payment_method = orders.rows.item(i).payment_method;
          console.log('Date: ', orders.rows.item(i).sale_date);
          newOrders.push(newOrder);
        }
        
        resolve(newOrders);
      })
      .catch(err =>{
        reject(err);
      });
    });
  }

  getLocalOrderDetail(orderId: any) {
    return new Promise((resolve, reject) => {
      console.log(orderId);
      this.conn.executeSql('SELECT * FROM OrderDetail WHERE order_id = ?', [orderId])
      .then(ordDetail => {
        let products: Product[] = [];
        let dishes: DishModel[] = [];

        for(var i = 0; i < ordDetail.rows.length; i++) {
          if(ordDetail.rows.item(i).product_id){
            this.productService.getProduct(ordDetail.rows.item(i).product_id)
            .then((product: Product) => {
              products.push(product);
            })
            .catch(err => {
              console.log(err);
            });
          }
          else
          {
            this.dishService.getDish(ordDetail.rows.item(i).dish_id)
            .then((dish: DishModel) => {
              dishes.push(dish);
            })
            .catch(err => {
              console.log(err);
            });
          }
        }

        resolve([dishes, products]);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}
