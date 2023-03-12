import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUser: IUser | undefined;
  constructor() { }

  login(userName: string, password: string){
    this.currentUser = {
      userName: userName,
      password: password
    }
    console.log(this.currentUser)
  }

  isLoggedIn(): boolean {
    if(this.currentUser?.userName && this.currentUser?.password){
      return true;
    }
    return false;
  }

  logout(){
    this.currentUser = undefined;
  }
}
