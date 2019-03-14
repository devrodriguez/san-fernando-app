import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Product } from 'src/models/product.model';


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

        console.log('Order db connection created');

        this.conn = conn;
        
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Products(id INTEGER, name VARCHAR(250), code VARCHAR(100), description VARCHAR(250), price_per_unit DECIMAL(18, 2), image_url VARCHAR(500))', [])
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
    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Products (id, name, code, description, price_per_unit, image_url) VALUES(?,?,?,?,?,?)', [product.id, product.name, product.code, product.description, product.price_per_unit, product.image_url])
      .then(data => {
        console.log('Producto insertado');
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
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
    return this.http.get('http://192.168.0.23:8000/api/products');
  }

  getLocalProducts() {
    
    return new Promise((resolve, reject) => {

      this.conn.executeSql('SELECT * FROM Products', [])
      .then(data => {
        let products: Product[] = [];

        for(var i = 0; i < data.rows.length; i++){
          products.push(new Product(
            Number(data.rows.item(i).id),
            data.rows.item(i).name,
            data.rows.item(i).code,
            data.rows.item(i).description,
            Number(data.rows.item(i).price_per_unit),
            /*data.rows.item(i).image_url*/
            "/assets/img/products/pechuga.jpg"
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
          Number(data.rows.item(0).price_per_unit),
          data.rows.item(0).image_url
        );
        resolve(product);
      })
      .catch(err => {
        reject(err);
      })
    });
  }
}
