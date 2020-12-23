import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cats$;
  urlId;
  currentProduct = {};
  constructor(
    private categoryService: CategoriesService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.cats$ = categoryService.getCategories();
    this.urlId = this.route.snapshot.paramMap.get('id');
    if(this.urlId){
      this.currentProduct = this.productService.getProduct(this.urlId).valueChanges()
      .subscribe(c => this.currentProduct = c);
    }
  }
  ngOnInit() {
  }
  save(product){
    if(this.urlId){
      this.productService.update(this.urlId, product);
      console.log("Product Updated")
    } else {
      this.productService.create(product);
    }
    setTimeout(() => {
      this.router.navigate(['manage/products']);
      }, 2000);
  }
  Back(){
    if(confirm("Are you sure you want to go back without saving?")) {
      this.router.navigate(['manage/products']);
    } 
  }
}
