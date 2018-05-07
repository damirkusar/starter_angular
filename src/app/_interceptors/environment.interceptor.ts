import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const loggerInstanceName = 'EnvironmentInterceptor';

@Injectable()
export class EnvironmentInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: `${environment.apiBaseBath}${req.url}`
    });

    return next.handle(request);
  }
}
