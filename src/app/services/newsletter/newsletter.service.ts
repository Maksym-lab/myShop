import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Letter } from 'src/app/models/Letter/letter';
@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  lettersCollection: AngularFirestoreCollection<Letter>;
  letters$: Observable<Letter[]>;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) { 
    this.lettersCollection = this.afs.collection('news');
    this.letters$ =  this.lettersCollection.snapshotChanges().pipe(
      map (changes => {
        return changes.map( a => {
          const data = a.payload.doc.data() as Letter;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    )
  }
  getLetters(){
    return this.letters$;
  }
  addLetter(letter : Letter){
    this.lettersCollection.add(letter);
  }
}
