import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/Observable/of';
import { tap, mergeMap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromAuth from '../auth/store/reducers';
import { Token } from '../auth/models';
import { AuthService } from '../auth/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: Token;
  constructor(private store: Store<fromAuth.State>) {
    this.store
      .select(fromAuth.getToken)
      .subscribe((token: Token) => (this.token = token));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Hello Auth Interceptor');
    let request;
    console.log('token', this.token);
    if (this.token) {
      request = req.clone({
        setHeaders: {
          Authorization: `${this.token.token_type} ${this.token.access_token}`
        }
      });
    } else {
      request = req.clone();
    }
    console.log('request', request);
    return next.handle(request);
  }
}
