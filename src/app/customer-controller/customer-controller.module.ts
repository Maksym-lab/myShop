import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'my/orders',
        component: MyOrdersComponent
      }
    ])
  ]
})
export class CustomerControllerModule { }
