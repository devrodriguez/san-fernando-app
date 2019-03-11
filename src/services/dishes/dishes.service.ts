import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DishModel } from 'src/models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private conn: SQLiteObject;
  private isOpen: boolean;

  constructor(private http: HttpClient, private sqlite: SQLite) { 

    if(!this.isOpen) {
      this.sqlite = new SQLite();

      this.sqlite.create({ name: 'data.db', location: 'default' })
      .then((conn: SQLiteObject) => {

        console.log('Order db connection created');

        this.conn = conn;
        
        this.conn.executeSql('CREATE TABLE IF NOT EXISTS Dishes(id INTEGER, name VARCHAR(250), price DECIMAL(18, 2), image_url VARCHAR(500))', [])
        .then(data => {
          console.log('Table DISHES created');
        })
        .catch(err => {
          console.log('Error on create DISHES table');
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

  getDishes() {
    console.log('Service dishes');
    return this.http.get('http://192.168.0.23:8000/api/dishes');
  }

  addDish(dish: DishModel) {
    return new Promise((resolve, reject) => {
      this.conn.executeSql('INSERT INTO Dishes(id, name, price, img_url) VALUES(?, ?, ?, ?)', [dish.id, dish.name, dish.price, dish.img_url])
      .then(data => {
        console.log('Dish was inserted');
        console.log(data);
        resolve(data);
      })
      .catch(err => {
        console.log('Error al insertar plato');
        console.log(err);
        reject(err);
      })
    })
  }


}
