import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(uid: any) {
    throw new Error("Method not implemented.");
  }
  usersCollection: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;
  constructor(private db: AngularFirestore) { 
    this.usersCollection = this.db.collection('users');
    this.users$ = this.usersCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map( a=> {
          const data = a.payload.doc.data() as User;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    )
  }
  save(user: firebase.User){
    this.usersCollection.doc(user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  delete(userid){
    this.usersCollection.doc(userid).delete();
  }
  getUsers(){
    return this.users$;
  }
  getUser(uid): AngularFirestoreDocument<User>{
    return this.usersCollection.doc(uid);
  }
}
