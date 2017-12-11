import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.routeConfig.path === sessionStorage.getItem('team')) {
      this.router.navigate(['/wrongteam', { team: next.routeConfig.path }]);
      return false;
    }
    console.log(next.routeConfig)
    this.router.navigate(['/success', { team: next.routeConfig.path }]);

    return true
  }
}
