import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent {
  products$;
  constructor(productsService:ProductService) { 
    this.products$ = productsService.getProducts();
  }
}
