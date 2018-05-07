import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as JwtDecoder from 'jwt-decode';
import { Token, User, IdToken, Authenticate } from '../models';

const authApi = '/auth';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(authenticate: Authenticate): Observable<Token> {
    const grant_type = 'password';
    const scope = 'openid profile roles';
    const params = `grant_type=${grant_type}&scope=${scope}&username=${
      authenticate.username
    }&password=${authenticate.password}`;

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    return this.http.post<Token>(`${authApi}/token`, params, {
      headers: headers
    });
  }

  public parseIdTokenToUser(token: Token): User {
    const parsedIdToken: IdToken = JwtDecoder(token.id_token);
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
