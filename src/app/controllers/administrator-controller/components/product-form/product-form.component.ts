import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cats$;
  constructor(private categoryService: CategoriesService) { 
    this.cats$ = categoryService.getCategories();
  }
  ngOnInit() {
  }
}
