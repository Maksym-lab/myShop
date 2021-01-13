import { ProductService } from '../../../../services/product/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product/product';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products$ : Observable<Product[]>;
  productsList : Product[];
  filtered: Product[];
  subscriptions: Subscription;
  constructor(private productService: ProductService,
    private router: Router) { 
     this.products$ = this.productService.getProducts();
     this.subscriptions = this.products$.subscribe(prod => 
      this.filtered = this.productsList = prod);
  }
  ngOnInit() {
  }
  onEdit(id){
    this.router.navigate(['/manage/products', id])
  }
  onDelete(id){
    this.productService.deleteProduct(id);
  }
  filter(query: string){
    this.filtered = (query) ? 
    this.productsList.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.productsList;
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
