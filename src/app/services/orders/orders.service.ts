import { Injectable } from '@angular/core';
import { shoppingCart } from '../../models/shopping-cart/shopping-cart';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../models/user/user';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { switchMap, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ref = this.db.list('/orders');
  appUser;
  shoppingCart;
  constructor(private db: AngularFireDatabase, 
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private userService: UserService) { 
    }
  checkout(){
    this.appUser = this.authService.getLogedUser();
    console.log("U:",this.appUser);
    let bar: shoppingCart;
    this.shoppingCartService.getObjCart().valueChanges().pipe(take(1))
    .subscribe(a => {
      console.log("checkoput ", a);
      bar = a as shoppingCart;
      this.placeOrder(bar,this.appUser);
    })
    setTimeout(() => {
      this.router.navigate(['/products']);
      this.shoppingCartService.clearCart();
    }, 3000);
  }
  placeOrder(shoppingcart:shoppingCart, user: string){
    shoppingcart.dateCreated = new Date().getTime();
    shoppingcart.user = user;
    this.ref.push(shoppingcart);
  }
  getOrdersByUser(user:User){
  }
}
