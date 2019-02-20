import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  conn: Promise<SQLiteObject>;

  constructor(private http: HttpClient, private sqlite: SQLite) { 
    
  }

  ngOnInit(): void {
    
  }

  addProduct(data: any) {
    this.conn
    .then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO Products (description, price_per_unit, image_url) VALUES(?,?,?)', [data.description, data.price, data.imageUrl])
      .then(res => {
        console.log(res);
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  getProducts() {
    return this.http.get('http://192.168.0.26:8000/api/products');
  }

  getLocalProducts() {
    this.conn = this.sqlite.create({
      name: 'sfdb.db',
      location: 'default'
    });

    this.conn
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXIST Products(id integer PRIMARY KEY AUTO_INCREMENT NOT NULL, description VARCHAR(250), price_per_unit DECIMAL(18, 2), image_url VARCHAR(500))')
    })
    .catch(err => {
      console.log(err);
    });

    this.conn
    .then((db: SQLiteObject) => {
      db.executeSql('select * from products')
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
