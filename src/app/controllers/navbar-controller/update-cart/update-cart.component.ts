import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
@Component({
  selector: 'update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  @Input() quantity = 0;
  constructor() {     
  }
  ngOnInit(){ 
  }
}
