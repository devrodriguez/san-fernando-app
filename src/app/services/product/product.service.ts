import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { Product } from 'src/app/models/product.model';
import { Util } from 'src/app/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private conn: SQLiteObject;
  private isOpen: boolean;
  private util: Util = new Util();

  constructor(private http: HttpClient, private sqlite: SQLite) {
    
    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {

        this.conn = conn;
        
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Products(id INTEGER, name VARCHAR(250), code VARCHAR(100), description VARCHAR(250), price DECIMAL(18, 2), img_url VARCHAR(500))', [])
        .then(data => {
          console.log('Table products created');
        })
        .catch(err => {
          console.log('Error on create products table');
        });

        this.isOpen = true;
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {

  }

  addProduct(product: Product) {
    return this.conn.executeSql('INSERT INTO Products (id, name, code, description, price, img_url) VALUES(?,?,?,?,?,?)', [product.id, product.name, product.code, product.description, product.price, product.img_url]);
  }

  deleteProducts() {
    return new Promise((resolve, reject) => {
      this.conn.executeSql('DELETE FROM Products', [])
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getProducts() {
    return this.http.get(`${this.util.apiUrl}/products/image/1`);
  }

  async getLocalProducts() {
    return await new Promise(async (resolve, reject) => {
      await this.conn.executeSql('SELECT id, name, code, description, price, img_url FROM Products ORDER BY name ASC', [])
      .then(data => {
        let products: Product[] = [];

        for(var i = 0; i < data.rows.length; i++){
          products.push(new Product(
            Number(data.rows.item(i).id),
            data.rows.item(i).name,
            data.rows.item(i).code,
            data.rows.item(i).description,
            Number(data.rows.item(i).price),
            `${this.util.storageUrl}/${data.rows.item(i).code}`
          ));
        }

        resolve(products);
      })
      .catch(error => {
        console.log('Error in product promise');
        reject(error);
      });
    });
  }

  getProduct(id: number) {
    return new Promise((resolve, reject) => {
      this.conn.executeSql('SELECT * FROM Products WHERE id = ?', [id])
      .then(data => {
        let product: Product = new Product(
          Number(data.rows.item(0).id),
          data.rows.item(0).name,
          data.rows.item(0).code,
          data.rows.item(0).description,
          Number(data.rows.item(0).price),
          data.rows.item(0).img_url
        );
        resolve(product);
      })
      .catch(err => {
        reject(err);
      })
    });
  }
}
