import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Order } from 'src/models/order.model';
import { Product } from 'src/models/product.model';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private conn: SQLiteObject;
  private isOpen: boolean;

  constructor(private sqlite: SQLite, private productService: ProductService) {
    console.log('Product service constructor');

    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {
        this.conn = conn;

        console.log('Order db connection created');
        
        //Create Orders table
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Orders(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sale_date VARCHAR(100), price_order DECIMAL(18, 2))', [])
        .then(data => {
          console.log('Se creo la tabla Orders');
        })
        .catch(error => {
          console.log('Error al crear tabla Orders');
          console.log(error);
        });

        //Create OrderDetail table
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS OrderDetail(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, order_id NUMBER, product_id NUMBER)', [])
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
    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Orders(sale_date, price_order) VALUES(?, ?)', [order.sale_date, order.price_order])
      .then(dataOrder => {
        // Insert Order Detail
        console.log('Data order');
        console.log(dataOrder.insertId);

        order.products.forEach((product: Product) => {
          console.log(dataOrder.insertId);
          console.log(product.id);

          this.conn.executeSql('INSERT INTO OrderDetail(order_id, product_id) VALUES(?, ?)', [dataOrder.insertId, product.id])
          .then(data => {
            console.log('OrderDetail data inserted');
          })
          .catch(err => {
            console.log('OrderDetail error');
          });
        });

        resolve(dataOrder);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getLocalOrders() {

    return new Promise((resolve, reject) => {

      this.conn.executeSql('SELECT * FROM Orders', [])
      .then(orders => {

        let newOrders: Array<Order> = new Array<Order>();

        for(var i = 0; i < orders.rows.length; i++) {
          let newOrder: Order = new Order();
          newOrder.id = orders.rows.item(i).id;
          newOrder.sale_date = orders.rows.item(i).sale_date;
          newOrder.price_order = orders.rows.item(i).price_order;
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
      .then(ordDetailProd => {
        let products: Array<Product> = new Array<Product>();

        for(var i = 0; i < ordDetailProd.rows.length; i++) {
          this.productService.getProduct(ordDetailProd.rows.item(i).product_id)
          .then((product: Product) => {
            products.push(product);
          })
          .catch(err => {
            console.log(err);
          })
        }

        console.log('Products');
        console.log(products);

        resolve(products);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}
