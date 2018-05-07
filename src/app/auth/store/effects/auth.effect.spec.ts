import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Actions } from '@ngrx/effects';

import { marbles } from 'rxjs-marbles';
import { Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { AuthService } from '../../services/auth.service';
import * as fromAuthEffects from './auth.effect';
import * as fromAuthActions from '../actions/auth.action';
import { Token, User } from '../../models';

export class TestActions extends Actions {
  source: Observable<any>;
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('AuthEffects', () => {
  let actions$: TestActions;
  let service: AuthService;
  let effects: fromAuthEffects.AuthEffects;

  const token: Token = {
    token_type: 'Bearer',
    access_token: 'MyAccessToken',
    expires_in: 3600,
    id_token: 'MyIdToken'
  };

  const user: User = {
    userId: '1234'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AuthService,
        fromAuthEffects.AuthEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(AuthService);
    effects = TestBed.get(fromAuthEffects.AuthEffects);

    jest.spyOn(service, 'login').mockReturnValue(Observable.of(token));
    jest.spyOn(service, 'parseIdTokenToUser').mockReturnValue(user);
  });

  describe('login', () => {
    test(
      'should return a user and token after Login',
      marbles(m => {
        const action = new fromAuthActions.Login({
          username: 'Hello',
          password: 'World'
        });
        const completion = new fromAuthActions.LoginSuccess({ user, token });

        actions$.stream = m.hot('-a', { a: action });
        const expected = m.cold('-b', { b: completion });

        m.expect(effects.login$).toBeObservable(expected);
      })
    );

    test(
      'should return a user and token after LoginSuccess',
      marbles(m => {
        const action = new fromAuthActions.LoginSuccess({ user, token });
        const completion = new fromAuthActions.LoginSuccess({ user, token });

        actions$.stream = m.hot('-a', { a: action });
        const expected = m.cold('-b', { b: completion });

        m.expect(effects.loginSuccess$).toBeObservable(expected);
      })
    );
  });
});
