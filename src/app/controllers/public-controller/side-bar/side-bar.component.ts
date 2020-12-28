import { switchMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categories/category';
@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  categories$: Category[];
  category: string;
  products;
  userSearch = "";
  @Input() m_category: string;
  constructor(
    route: ActivatedRoute,
    private categoriesServices: CategoriesService,
    private productService: ProductService) { 
      console.log("mcategory"+this.m_category);
    categoriesServices.getCategories().pipe(
      switchMap( cats => {
        this.categories$ = cats;
        return route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
      });
  }
  ngOnInit() {
  }
}
