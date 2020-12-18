import { ProductService } from '../../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products$ : Observable<Product[]>;
  productsList : Product[];
  constructor(private productService: ProductService,
    private router: Router) { 
     this.products$ = this.productService.getProducts();
  }
  ngOnInit() {
  }
  onEdit(id){
    this.router.navigate(['/manage/products', id])
  }
  onDelete(id){
    this.productService.deleteProduct(id);
  }
}
