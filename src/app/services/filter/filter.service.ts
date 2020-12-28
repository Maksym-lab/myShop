import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product/product';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterByCategory(products: Product[], category: string){
    let filteredProducts = (category) ?
        products.filter(p => p.category === category) :
        products;
    return filteredProducts;
  }
}
