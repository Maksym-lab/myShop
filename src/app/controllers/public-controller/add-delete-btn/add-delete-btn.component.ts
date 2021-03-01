import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
@Component({
  selector: 'add-delete-btn',
  templateUrl: './add-delete-btn.component.html',
  styleUrls: ['./add-delete-btn.component.css']
})
export class AddDeleteBtnComponent implements OnInit {
  @Input() product: ShoppingProduct;
  constructor(private shoppingService: ShoppingCartService) {  }
  addToCart(){    
    this.shoppingService.addToCart(this.product);
  }
  removeFromCart(){
    this.shoppingService.removeFromCart(this.product);
  }
  ngOnInit() {
  }
}
