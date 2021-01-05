import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { shoppingCart } from 'src/app/models/shopping-cart/shopping-cart';
import { ShoppingProduct } from '../../../models/shoppingProduct/shopping-product';
import { map } from 'rxjs/operators';
@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product = {
    title:"",
    price:0,
    imageUrl:"",
    category:""
  };
  current: ShoppingProduct = {
    title:"",
    price:0,
    imageUrl:"",
    category:"",
    quantity:0
  };
   constructor(private shoppingService: ShoppingCartService) { 
  }
  async ngOnInit() {
    this.shoppingService.getItem(this.product.id).valueChanges().subscribe(item => {
      console.log(">",item);
      if(item){
        this.current = item as ShoppingProduct;
      } else {
        this.current = {
          title:"",
          price:0,
          imageUrl:"",
          category:"",
          quantity:0
        };
      }
    });
  }
  addToCart(){    
    this.shoppingService.addToCart(this.product);
  }
  removeFromCart(){
    this.shoppingService.removeFromCart(this.product);
  }
}
