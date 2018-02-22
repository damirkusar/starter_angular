import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { EnvironmentInterceptor } from './environment.interceptor';

export const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: EnvironmentInterceptor,
    multi: true
  }
];
