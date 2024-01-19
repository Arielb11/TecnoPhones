import { Inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {

    //const router = Inject(Router);

    if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem('token')){
            return true;
        } else {
            return false;
        }
      } else {
        //router.navigate(['/login']);
        return false;
      }
    
}