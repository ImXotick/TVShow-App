import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  //Calls login api
  login(username: string, password: string): Observable<any> {
    return this.http
      .post('http://localhost:3000/login', {
        username: username,
        password: password,
      })
      .pipe(
        map((res: any) => {
          this.authService.token = res.token;
          this.authService.username = res.username;
          this.authService.likedShows = res.likedShows;
          return res;
        })
      );
  }

  //Calls register api
  register(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/register', {
      username: username,
      password: password,
    });
  }
}
