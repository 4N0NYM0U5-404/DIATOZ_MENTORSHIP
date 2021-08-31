import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    // private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(this.authService.isUserLoggedIn())
    // if(this.authService.isUserLoggedIn()) {
    //   return true;
    // } else {
    //   return false
    // }

    const token:any = localStorage.getItem('isLoggedin');
    console.log(token)
    if(token) {
      return true;
    }
    else{
      return this.router.navigate(['/']);
    }
    }

  }

