import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from 'src/app/models/user/user';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  appUser: Observable<User>;
  constructor(private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private afs: AngularFirestore){
      this.user$ = afAuth.authState;
      this.appUser = this.user$.pipe(switchMap(customer=>{
        if (customer){
          return this.userService.getUser(customer.uid).valueChanges();
        } else {
          return of(null)
        }
      }))
    }
  loginGoogle(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); 
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
