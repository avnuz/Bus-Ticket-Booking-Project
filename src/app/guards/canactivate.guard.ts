import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminService } from '../services/admin.service';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class canActivateAuthGuard implements CanActivate{
  constructor(private admin: AdminService, private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(localStorage.getItem('admin')){

      return true;


    }
    return this.admin.isSignedIn;
  }

}
