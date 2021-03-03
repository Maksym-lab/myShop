import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:ShoppingProduct[];
  sc: shoppingCart;
  totalprice: number;
  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router) {
   }
   ngOnInit() {
    this.shoppingCartService.getListCart().valueChanges()
    .subscribe(items => {
      this.products = items as ShoppingProduct[];
      this.totalprice=0;
      this.products.forEach(product => {
        this.totalprice += (product.price * product.quantity);
      });
    }).unsubscribe;
  }
  btnClick(){
    this.shoppingCartService.getObjCart().update({
      "totalPrice":this.totalprice
    });
    this.router.navigateByUrl('/check-out');
  }
  clear(){
    this.shoppingCartService.clearCart();
  }
}
