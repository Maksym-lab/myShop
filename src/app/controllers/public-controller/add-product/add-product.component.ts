import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private shoppingService: ShoppingCartService) { }
  ngOnInit() {
  }
  addToCart(){
    this.shoppingService.addToCart(this.product);
  }
}
