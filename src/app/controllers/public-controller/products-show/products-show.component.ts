import { ActivatedRoute } from '@angular/router';
import { FilterService } from './../../../services/filter/filter.service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent {
  products: Product [];
  filteredProducts: Product [];
  category: string;
  constructor(private productService: ProductService,
    route: ActivatedRoute) { 
    productService
      .getProducts().pipe(
      switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        console.log(this.category);
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }
}
