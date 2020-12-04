import { FormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewslettersComponent } from './news/newsletters/newsletters.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';
@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    NewslettersComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'manage/orders',
        component: AdminOrdersComponent
      },
      {
        path: 'manage/products',
        component: AdminProductsComponent
      }, 
      {
        path: 'manage/newsletters',
        component: NewslettersComponent
      }
    ])
  ],
  providers: [
    NewsletterService
  ]
})
export class AdministratorModule { }
