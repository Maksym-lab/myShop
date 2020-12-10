import { CategoriesService } from './../../services/categories/categories.service';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminAuthGuardService } from './../../services/admin-auth-guard/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewslettersComponent } from './news/newsletters/newsletters.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    NewslettersComponent,
    NewsListComponent,
    ProductFormComponent,
    AdminCategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'manage/categories',
        component: AdminCategoriesComponent,
        canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'manage/products/new',
        component: ProductFormComponent,
        canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'manage/products',
        component: AdminProductsComponent,
        canActivate:[AuthGuardService, AdminAuthGuardService]
      }, 
      {
        path: 'manage/newsletters',
        component: NewslettersComponent,
        canActivate:[AuthGuardService, AdminAuthGuardService]
      }, {
        path: 'manage/orders',
        component: AdminOrdersComponent,        
        canActivate:[AuthGuardService, AdminAuthGuardService]
      }
    ])
  ],
  providers: [
    NewsletterService,
    AuthGuardService,
    AdminAuthGuardService,
    CategoriesService
  ]
})
export class AdministratorModule { }
