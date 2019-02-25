import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Order } from 'src/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private conn: SQLiteObject;
  private isOpen: boolean;

  constructor(private sqlite: SQLite) {
    console.log('Order constructor');
    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {
        this.conn = conn;

        console.log('Get order connection');

        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Orders(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sale_date VARCHAR(100), price_order DECIMAL(18, 2))', [])
        .then(data => {
          console.log('Se creo la tabla Orders');
        })
        .catch(error => {
          console.log('Error al crear tabla Orders');
          console.log(error);
        });

        this.isOpen = true;
      });
    }
  }

  addLocalOrder(order: Order) {
    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Orders(sale_date, price_order) VALUES(?,?)', [order.sale_date, order.price_order])
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getLocalOrders() {
    console.log('Get local orders');
    console.log(this.conn);

    return new Promise((resolve, reject) => {

      this.conn.executeSql('SELECT * FROM Orders', [])
      .then(orders => {
        console.log('Orders');
        console.log(orders);
        let newOrders: Array<Order> = new Array<Order>();

        for(var i = 0; i < orders.rows.length; i++) {
          let newOrder: Order = new Order();
          newOrder.sale_date = orders.rows.item(i).sale_date;
          newOrder.price_order = orders.rows.item(i).price_order;
          newOrders.push(newOrder);
        }
        console.log(newOrders);
        resolve(newOrders);
      })
      .catch(err =>{
        reject(err);
      });
    });
  }
}
