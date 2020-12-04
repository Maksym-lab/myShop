import { ShoppingCartComponent } from './../public-controller/shopping-cart/shopping-cart.component';
import { HomeComponent } from './../public-controller/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsShowComponent } from './products-show/products-show.component';
@NgModule({
  declarations: [
    HomeComponent,    
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
      }
    ])
  ],
  exports:[
    HomeComponent
  ]
})
export class PublicModule { }
