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
    loadChildren: './components/home/home.module#HomePageModule'
  },
  { 
    path: 'order', 
    loadChildren: './components/order/order.module#OrderPageModule' 
  },
  { 
    path: 'orders', 
    loadChildren: './components/orders/orders.module#OrdersPageModule' 
  },
  { 
    path: 'create-order', 
    loadChildren: './components/create-order/create-order.module#CreateOrderPageModule' 
  },
  { 
    path: 'inventory', 
    loadChildren: './components/inventory/inventory.module#InventoryPageModule' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
