import { ShoppingProduct } from '../shoppingProduct/shopping-product';
export class shoppingCart {
    id?:string;
    dateCreated: number;
    items: ShoppingProduct[] = [];
    totalQuantity:number;
    totalPrice?:number;
    user?:string;
    status?: string;
    constructor(){
        this.dateCreated = new Date().getTime();
        this.totalQuantity = 0;
    } 
}
