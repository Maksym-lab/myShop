import { AuthService } from '../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private authService: AuthService, 
    private router: Router) { }
  login(){
    this.authService.loginGoogle();
    this.router.navigate(["/products"]);
  }
}
