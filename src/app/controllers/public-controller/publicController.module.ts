import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ShoppingCartComponent } from './../public-controller/shopping-cart/shopping-cart.component';
import { HomeComponent } from './../public-controller/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsShowComponent } from './products-show/products-show.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilterService } from 'src/app/services/filter/filter.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { AddDeleteBtnComponent } from './add-delete-btn/add-delete-btn.component';
@NgModule({
  declarations: [
    HomeComponent,    
    ProductsShowComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    SideBarComponent,
    AddProductComponent,
    AddDeleteBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { 
        path:'products/:id', 
        component: ProductsShowComponent
      },
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
    HomeComponent,
    ProductCardComponent,
    AddDeleteBtnComponent
  ],
  providers: [
    CategoriesService,
    FilterService,
    ShoppingCartService
  ]
})
export class PublicModule { }
