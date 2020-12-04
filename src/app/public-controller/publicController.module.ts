import { ShoppingCartComponent } from './../public-controller/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './../public-controller/check-out/check-out.component';
import { HomeComponent } from './../public-controller/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsShowComponent } from './products-show/products-show.component';
@NgModule({
  declarations: [
    CheckOutComponent,
    HomeComponent,    
    OrderSuccessComponent,
    ProductsShowComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path:'products', 
        component: ProductsShowComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent
      }
    ])
  ],
  exports:[
    HomeComponent
  ]
})
export class PublicModule { }
