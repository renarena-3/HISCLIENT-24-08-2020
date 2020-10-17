import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public  async login(postData){
    console.log('async :: '+postData);
  await  sessionStorage.setItem('userinfo',JSON.stringify(postData));
  return true;
  }
}
