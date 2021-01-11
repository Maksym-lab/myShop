import { ShoppingProduct } from '../shoppingProduct/shopping-product';
export class shoppingCart {
    dateCreated: number;
    items: ShoppingProduct[] = [];
    totalQuantity:number;
    constructor(){
        this.dateCreated = new Date().getTime();
        this.totalQuantity = 0;
    } 
}
