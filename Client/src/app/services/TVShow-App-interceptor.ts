import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TVShowAppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.token) {
      const authReq = req.clone({
        headers: req.headers.set('X-AUTH-HEADER', this.authService.token),
      });
      console.log('Making an authorized request!');
      req = authReq;
    }
    return next.handle(req);
  }
}
