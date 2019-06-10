import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { InventoryModel } from 'src/app/models/inventory.model';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  inventory: InventoryModel[] = [];
  loading: any;

  constructor(private inventoryService: InventoryService,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.getInventory();
  }

  getInventory() {
    this.loadingOn()
    .then(() => {
      this.inventoryService.getInventory()
      .subscribe((inventory: InventoryModel[]) => {
        console.log('Get inventory: ', inventory);
        this.inventory = inventory;

        this.loadingOff();
      }, (error) => {
        console.log(error);
        this.loadingOff();
      });  
    });    
  }

  updateStock() {
    this.loadingOn()
    .then(() => {
      this.inventoryService.updateStock(this.inventory)
      .subscribe(() => {
        console.log('Stock updated');
        this.loadingOff();
      }, (error) => {
        this.loadingOff();
      })
    })
  }

  async loadingOn() {
    this.loading = await this.loadingController.create({
      message: 'Cargando'
    });

    return await this.loading.present();
  }

  async loadingOff() {
    return await this.loading.dismiss();
  }

  async Edit() {
    
  }

}
