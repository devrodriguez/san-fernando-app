import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


import { IonicModule } from '@ionic/angular';

import { CreateOrderPage } from './create-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    NativeStorage
  ],
  declarations: [CreateOrderPage]
})
export class CreateOrderPageModule {}
