import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    isAdmin: boolean;

    constructor(
        private _router: Router
    ) { 
        this.isAdmin = false;
    }

    setAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }

    canActivate() {
        if (this.isAdmin)
            return true;
        else
        {
            this._router.navigate(['/']);
            return false;
        }
            
    }

}