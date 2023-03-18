import {  CanActivate,Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  
  export class AuthGuard implements CanActivate{

    constructor(private _auth:AuthService,private router:Router){

    }

    canActivate():any{
        if(this._auth.userLoggedIn){
            return true
        }else{
            this.router.navigate(['/login'])
        }
    }
}