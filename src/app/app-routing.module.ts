import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'order', 
    loadChildren: './order/order.module#OrderPageModule' 
  },
  { 
    path: 'orders', 
    loadChildren: './orders/orders.module#OrdersPageModule' 
  },
  { 
    path: 'create-order', 
    loadChildren: './create-order/create-order.module#CreateOrderPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
