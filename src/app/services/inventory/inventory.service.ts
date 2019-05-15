import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Util } from 'src/app/util';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private util: Util = new Util();

  constructor(private http: HttpClient) { }

  async getInventory() {
    await this.http.get(`${this.util.apiUrl}/inventory`);
  }

  async updateStock(id: number, units: number) {
    await this.http.put(`${this.util.apiUrl}/inventory/${id}`, units);
  }
}
