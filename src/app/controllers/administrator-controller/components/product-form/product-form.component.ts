import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cats$;
  constructor(private categoryService: CategoriesService, private productService: ProductService) { 
    this.cats$ = categoryService.getCategories();
  }
  ngOnInit() {
  }
  save(product){
    this.productService.create(product);
  }
}
