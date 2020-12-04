import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LittleShop';
  constructor(private auth: AuthService, router: Router, private userService: UserService){
    auth.user$.subscribe(user => {
        if(user){
          userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      })
  }
}
