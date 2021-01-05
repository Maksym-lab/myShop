import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent implements OnInit{
  products: Product [] = [];
  filteredProducts: Product [] = [];
  category: string;
  shoppingCart: shoppingCart;
  subscribtion: Subscription;
  constructor(
    private productService: ProductService,
    private filterService: FilterService,
    private cartService: ShoppingCartService,
    routeCategory: ActivatedRoute) { 
      this.filterBy(routeCategory);
  }
  async ngOnInit(){
    this.subscribtion = (await this.cartService.getCart()).pipe(take(1))
    .subscribe(c => { this.shoppingCart = c as shoppingCart});
  }
  ngOnDestroy(){
    try {
      this.subscribtion.unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }
  filterBy(category: ActivatedRoute){
    this.productService
    .getProducts().pipe(
    switchMap(products => {
      this.products = products;
      return category.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = this.filterService.filterByCategory(this.products, this.category);
    });
  }
}
