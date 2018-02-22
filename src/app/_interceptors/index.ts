import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { EnvironmentInterceptor } from './environment.interceptor';
import { ErrorResponseInterceptor } from './errorResponse.interceptor';

export const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: EnvironmentInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorResponseInterceptor,
    multi: true
  }
];
