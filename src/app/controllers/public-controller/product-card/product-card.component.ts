import { Product } from '../../../models/product/product';
import { Component, OnInit, Input } from '@angular/core';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor() { }
  ngOnInit() {
  }
}
