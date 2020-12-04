import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    MyOrdersComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'my/orders',
        component: MyOrdersComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
    ])
  ]
})
export class CustomerControllerModule { }
