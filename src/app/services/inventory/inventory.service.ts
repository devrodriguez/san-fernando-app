import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Util } from 'src/app/util';
import { InventoryModel } from 'src/app/models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private util: Util = new Util();

  constructor(private http: HttpClient) { }

  getInventory() {
    return this.http.get(`${this.util.apiUrl}/inventory`);
  }

  updateStock(inventory: InventoryModel[]) {
    return this.http.post(`${this.util.apiUrl}/inventory`, inventory);
  }

  async updateProductStock(id: number, units: number) {
    return await this.http.put(`${this.util.apiUrl}/inventory/${id}`, units);
  }
}
