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
    console.log('Product service constructor');
    
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
        console.log('Se creo la tabla Products');
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });

  }

  getProducts() {
    return this.http.get('http://192.168.0.23:8000/api/products');
  }

  getLocalProducts() {
    
    return new Promise((resolve, reject) => {
      console.log('In products promise');
      console.log(this.conn);

      this.conn.executeSql('SELECT * FROM Products', [])
      .then(data => {
        let products: Array<Product> = new Array<Product>();

        for(var i = 0; i < data.rows.length; i++){
          products.push(new Product(
            Number(data.rows.item(i).name),
            data.rows.item(i).name,
            data.rows.item(i).code,
            data.rows.item(i).description,
            Number(data.rows.item(i).price_per_unit),
            data.rows.item(i).image_url
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
}
