import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private conn: SQLiteObject;
  private isOpen: boolean;

  constructor(private http: HttpClient, private sqlite: SQLite) { 
    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {
        this.conn = conn;
        
        this.conn.executeSql('CREATE TABLE IF NOT EXIST Products(id integer PRIMARY KEY AUTO_INCREMENT NOT NULL, description VARCHAR(250), price_per_unit DECIMAL(18, 2), image_url VARCHAR(500))', []);
        this.isOpen = true;
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
    
  }

  addProduct(product: any) {

    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Products (name, description, price_per_unit, picture_url) VALUES(?,?,?)', [product.name, product.description, product.price_per_unit, product.picture_url])
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });

  }

  getProducts() {
    console.log('Getting products from API');
    return this.http.get('http://192.168.0.24:8000/api/products');
  }

  getLocalProducts() {
    console.log('Getting local products');
    return new Promise((resolve, reject) => {
      this.conn.executeSql('SELECT * FROM Products', [])
      .then(data => {
        let products = [];

        for(var i = 0; i < data.rows.length; i++){
          products.push({
            name: data.rows.item(i).name,
            description: data.rows.item(i).description,
            price_per_unit: data.rows.item(i).price_per_unit,
            picture_url: data.rows.item(i).picture_url
          });
        }

        resolve(products);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}
