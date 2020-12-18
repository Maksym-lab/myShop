import { Product } from '../../../models/product/product';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;
  @Input() category: string;
  @Input() imageUrl: string;
  constructor() { }
  ngOnInit() {
  }
}
