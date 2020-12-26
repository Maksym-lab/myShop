import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product/product';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  products$;
  products: Product [];
  filterProducts: Product [];
  category;
  userSearch = "";
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,) {
    this.products$ = productService.getProducts();
    productService
      .getProducts().pipe(
      switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.setCourseFilter();
      });
   }
  setCourseFilter(){
    this.filterProducts = this.courseFilter();
  }
  courseFilter(){    
    return this.products.filter(p => this.categoryCheck(p.category));
  }
  categoryCheck(courseCategory: string) {
    return courseCategory === this.category || !this.category;
  }
  getProducts(){return this.filterProducts;}
}
