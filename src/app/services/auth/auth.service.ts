import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  subject: "Testing subject";
  message: "Testing message";
  from: "noreply@littlestore.foo.com";
  type = "text/plain";
  constructor(private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router){
      this.user$ = afAuth.authState;
    }
  loginGoogle(){
    this.afAuth.auth.signInWithRedirect (new firebase.auth.GoogleAuthProvider()); 
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
