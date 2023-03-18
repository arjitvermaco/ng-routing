import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn = true;

  constructor() { }

  loginUser(){
    //Test real login
    this.userLoggedIn = true
  }

  logOutUser(){
    this.userLoggedIn = false

  }
}
