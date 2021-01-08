import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { Product } from 'src/app/models/product/product';
import { ShoppingProduct } from '../../models/shoppingProduct/shopping-product';
import { shoppingCart } from '../../models/shopping-cart/shopping-cart';
import { Observable } from 'rxjs';
@Injectable()
export class ShoppingCartService {
  currentCartId: string;
  constructor(
    private db: AngularFireDatabase
  ) { }
  public async getCart(){
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges();
  }
  private create(){
    let cart : shoppingCart = new shoppingCart;
    return this.db.list('/shopping-carts').push(cart);
  }
  clearCart() {
    this.db.object('/shopping-carts/' + this.currentCartId + '/items').remove();
  }
   removeItem(item: Product) {
    this.db.object('/shopping-carts/' + this.currentCartId + '/items/' + item.id).remove();
  }
  public getItem(productId: string){
    this.currentCartId = localStorage.getItem('cartId');
    console.log("current cart ID: ", this.currentCartId);
    return this.db.object('/shopping-carts/' + this.currentCartId + '/items/' + productId);
  }
  public async addToCart(product: Product) {
    console.log("shopping service adding...");
    this.updateItem(product, 1);
  }
  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }
  private async updateItem(product: Product, change: number) {    
    let item$ = await this.getItem( product.id);
    item$.valueChanges().pipe(take(1)).subscribe(item => {
      if(item && change>0){        
        console.log("Product in cart, adding 1 item", item );
        this.addOneProduct(item$, item);
      }else if(item && change<0){
        this.deleteOneProduct(item$, item);
      }
      else if (!item && change >0){
        console.log("Shopping service creating new product...");
        this.createNewProduct(item$, product);
      }
    });
  }
  private async createNewProduct(item$, product:Product){
    let newProduct: ShoppingProduct = new ShoppingProduct(product);
    item$.update(newProduct);
  }
  private async addOneProduct(item$, item){
    let currentProduct = item as ShoppingProduct;
    currentProduct.quantity++;
    item$.update(currentProduct);
  }
  private async deleteOneProduct(item$, item){
    let currentProduct = item as ShoppingProduct;
    let quantity = currentProduct.quantity;   
    if(quantity<= 1){
      item$.remove();
    } else {
      currentProduct.quantity--;
      item$.update(currentProduct);
    }
  }
  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;
    let result = await this.create();
    this.currentCartId = result.key;
    localStorage.setItem('cartId', this.currentCartId);
    return result.key;
  }  
}