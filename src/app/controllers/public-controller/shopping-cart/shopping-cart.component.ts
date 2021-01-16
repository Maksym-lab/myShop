import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { take, map } from 'rxjs/operators';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:unknown[];
  sc: shoppingCart = new shoppingCart();
  subscriptions: Subscription;
  cart$;
  constructor(private shoppingCartService: ShoppingCartService) { }
   ngOnInit() {
    this.cart$ = this.shoppingCartService.getObjCart();
    this.shoppingCartService.getListCart().valueChanges()
    .subscribe(items => {
      this.products = items as ShoppingProduct[];
      let total;
      this.products.forEach(p=> {
        let a = p as ShoppingProduct;
        total += a.price as number;
        console.log("total: ", total);
      });
      console.log("products",this.products);
    }).unsubscribe;
  }
  removeFromCart(){
    console.log("To remove");
  }
  addToCart(){
    console.log("To add");
  }
}
