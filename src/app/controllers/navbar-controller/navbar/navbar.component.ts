import { AuthService } from '../../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser = {  }
  constructor(public authService: AuthService,
    private router: Router) { 
    this.authService.user$.subscribe(
      user => this.appUser = user
    )
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
