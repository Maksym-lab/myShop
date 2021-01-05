import { ShoppingProduct } from '../shoppingProduct/shopping-product';
export class shoppingCart {
    dateCreated: number;
    items: ShoppingProduct[] = [];
    getQuantity(productId: string){
        this.items.forEach(element => {
            if(element.id === productId){
                return element.quantity;
            }
        });
        return 0;
    }
    constructor(){
        this.dateCreated = new Date().getTime();
    }
}
