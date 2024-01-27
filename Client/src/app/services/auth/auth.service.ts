import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string = '';
  private _username: string = '';

  constructor() {}

  set token(token: string) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  set username(username: string) {
    this._username = username;
  }

  get username() {
    return this._username;
  }

  isLoggedIn() {
    return this._token != '';
  }
}
