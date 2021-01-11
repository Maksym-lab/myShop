import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/categories/category';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  catsCollection: AngularFirestoreCollection<Category>;
  cats$: Observable<Category[]>; 
  constructor(private db: AngularFirestore) { 
    this.catsCollection = this.db.collection<Category>('cats', cats => cats.orderBy('title'));
  }
  public getCategories(): Observable<Category[]>{
    this.getSnapshot();
    return this.cats$;
  }
  private getSnapshot(){
    this.cats$ = this.catsCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map( fireCat => {
          const data = fireCat.payload.doc.data() as Category;
          data.id = fireCat.payload.doc.id;
          return data;
        })
      })
    )
  }
}
