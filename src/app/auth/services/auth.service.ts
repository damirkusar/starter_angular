import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as JwtDecoder from 'jwt-decode';
import { IToken, IUser, IIDToken } from '../models';

const authApi = '/api/auth/';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(userName: string, password: string): Observable<IToken> {
    const grant_type = 'password';
    const scope = 'openid profile roles';
    const params = `grant_type=${grant_type}&scope=${scope}&username=${userName}&password=${password}`;

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post<IToken>(`${authApi}/token`, params, {
      headers: headers
    });
  }

  public parseIdToken(token: string): IUser {
    const parsedIdToken: IIDToken = JwtDecoder(token);

    // const base64Url = token.split('.')[1];
    // const base64 = base64Url.replace('-', '+').replace('_', '/');
    // const parsedIdToken: IIDToken = JSON.parse(window.atob(base64));

    const user: IUser = {
      userId: parsedIdToken.sub,
      username: parsedIdToken.username,
      firstName: parsedIdToken.firstName,
      lastName: parsedIdToken.lastName,
      email: parsedIdToken.email,
      roles: parsedIdToken.roles
    };
    return user;
  }
}
