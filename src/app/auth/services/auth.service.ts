import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as JwtDecoder from 'jwt-decode';
import { Token, User, IdToken } from '../models';

const authApi = '/api/auth/';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(userName: string, password: string): Observable<Token> {
    const grant_type = 'password';
    const scope = 'openid profile roles';
    const params = `grant_type=${grant_type}&scope=${scope}&username=${userName}&password=${password}`;

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post<Token>(`${authApi}/token`, params, {
      headers: headers
    });
  }

  public parseIdTokenToUser(token: string): User {
    const parsedIdToken: IdToken = JwtDecoder(token);

    // const base64Url = token.split('.')[1];
    // const base64 = base64Url.replace('-', '+').replace('_', '/');
    // const parsedIdToken: IIDToken = JSON.parse(window.atob(base64));

    const user: User = {
      userId: parsedIdToken.sub,
      username: parsedIdToken.username,
      firstName: parsedIdToken.firstName,
      lastName: parsedIdToken.lastName,
      email: parsedIdToken.email,
      roles: parsedIdToken.role
    };
    return user;
  }
}
