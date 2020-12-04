import { AdminProductsComponent } from './../administrator-controller/admin-products/admin-products.component';
import { AdminOrdersComponent } from './../administrator-controller/admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'manage-orders',
        component: AdminOrdersComponent
      },
      {
        path: 'manage-products',
        component: AdminProductsComponent
      }
    ])
  ]
})
export class AdministratorModule { }
