import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

const loggerInstanceName = 'ErrorResponseInterceptor';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.router.navigate(['/auth/login2']);
            }
            if (error.status === 403) {
            }
          }
          return Observable.throw(error);
        }
      )
    );
  }
}
