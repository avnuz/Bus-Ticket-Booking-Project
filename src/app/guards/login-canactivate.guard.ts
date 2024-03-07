import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

import { AdminService } from '../services/admin.service';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LogincanActivateAuthGuard implements CanActivate{
  constructor(private admin: AdminService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(localStorage.getItem('admin')){
      return false;
    }
    else{
      return true;
    }
  }

}
