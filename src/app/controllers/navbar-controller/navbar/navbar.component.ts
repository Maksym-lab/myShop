import { AuthService } from '../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { map } from 'rxjs/operators';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser = {  }
  shoppingCart: shoppingCart;
  quantity=0;
  constructor(public authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private router: Router) { 
    this.authService.user$.subscribe(
      user => this.appUser = user
    )
    this.shoppingCart = new shoppingCart();
    this.shoppingCartService.getObjCart().valueChanges().pipe(map(i=>
      {return i as shoppingCart}))
    .subscribe(product => {
      this.quantity = product.totalQuantity;
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
