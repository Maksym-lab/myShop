import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { FilterService } from 'src/app/services/filter/filter.service';
@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent {
  products: Product [] = [];
  filteredProducts: Product [] = [];
  category: string;
  constructor(private productService: ProductService,
    private filterService: FilterService,
    routeCategory: ActivatedRoute) { 
      this.filterBy(routeCategory);
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
