import { Product } from '../product/product';
export class ShoppingProduct implements Product{
    id?: string;
    title: string;
    price: number;
    imageUrl: string;
    category: string;
    quantity: number;
    constructor(product: Product){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.imageUrl = product.imageUrl;
        this.category = product.category;
        this.quantity = 1;
    }
}
