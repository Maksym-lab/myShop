import { Product } from './../../models/product/product';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  product$: Observable<Product[]>
  constructor(private db: AngularFirestore) { 
    this.productsCollection = this.db.collection('products');
  }
  create(product){
    this.productsCollection.add(product);
  }
  deleteProduct(productId){
    return this.productsCollection.doc(productId).delete();
  }
  update(productID, product){
    this.getProduct(productID).update(product);
  }
  getProducts(){
    return this.productsCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map( a=> {
          const data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    );
  }
  getProduct(productId): AngularFirestoreDocument<Product>{
    return this.productsCollection.doc(productId);
  }
}
