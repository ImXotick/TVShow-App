import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/login/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authToken: string = '';
  public login: Login;

  constructor(private http: HttpClient) {
    this.login = new Login('myUsername', 'myPassword', '');
  }

  doLogin() {
    console.log('test');
    /*
    this.http.post('/login', this.login).subscribe({
      next: (serverLogin) => {
        console.log(serverLogin);
        //this.authToken = serverLogin.token;
        console.log('Backend token: ' + this.authToken);
      },
      error: (error) => console.log(error),
    });
    */
  }
}
