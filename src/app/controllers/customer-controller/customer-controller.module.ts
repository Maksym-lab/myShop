import { OrderSuccessComponent } from './../customer-controller/order-success/order-success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {CheckOutComponent} from './check-out/check-out.component';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
@NgModule({
  declarations: [
    MyOrdersComponent, 
    LoginComponent,
    CheckOutComponent,
    OrderSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'my/orders',
        component: MyOrdersComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent, 
        canActivate:[AuthGuardService]
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent, 
        canActivate:[AuthGuardService]
      }
    ])
  ],
  providers:[
    AuthService,
    OrdersService
  ]
})
export class CustomerControllerModule { }
