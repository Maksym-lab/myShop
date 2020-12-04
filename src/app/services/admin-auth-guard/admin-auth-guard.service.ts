import { UserService } from './../user/user.service';
import { AuthService } from './../auth/auth.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  constructor(private auth: AuthService, private userService: UserService) { }
  canActivate(): Observable<boolean>{
    return this.auth.appUser.pipe(map(a => a.isAdmin));
  }
}
