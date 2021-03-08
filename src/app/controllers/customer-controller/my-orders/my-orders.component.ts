import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { AuthService } from '../../../services/auth/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$ : shoppingCart[]= [];
  items$: ShoppingProduct[];
  date;
  constructor(private ordersService: OrdersService) {
     }
  ngOnInit() {
    this.ordersService.getOrders().snapshotChanges()
    .pipe(map( changes => {
      return changes.map( a => {
        const sc : shoppingCart = new shoppingCart;
        sc.dateCreated = a.payload.child('dateCreated').val();
        sc.totalQuantity = a.payload.child('totalQuantity').val();
        sc.totalPrice = a.payload.child('totalPrice').val();
        sc.user = a.payload.child('user').val();
        a.payload.child('items').forEach(c=>{ 
          let product : ShoppingProduct = {};
          product.title = c.child('title').val();
          product.quantity = c.child('quantity').val();
          product.price = c.child('price').val();
          product.category = c.child('category').val();
          sc.items.push(product);
        });
        console.log("+", sc.items);
        return sc;
      }) 
    })).subscribe(params => { 
      this.orders$ = params;          
     });
    }
}
