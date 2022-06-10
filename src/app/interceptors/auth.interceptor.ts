import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if ( this.authService.isAuthorized() ) {
      request = request.clone({
        setHeaders: {
          'X-Token': this.authService.xToken
        }
      })
    }
    return next.handle(request);
  }
}
