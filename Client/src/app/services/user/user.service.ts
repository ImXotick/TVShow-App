import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/model/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  //Calls login api
  login(user: User): Observable<any> {
    return this.http
      .post('http://localhost:3000/login', {
        user,
      })
      .pipe(
        map((res: any) => {
          this.authService.token = res.token;
          this.authService.username = res.username;
          return res;
        })
      );
  }

  //Calls register api
  register(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/register', {
      user,
    });
  }
}
