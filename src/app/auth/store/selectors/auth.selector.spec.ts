import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { TestBed } from '@angular/core/testing';

import * as fromRoot from '../../../_store';
import * as fromReducers from '../reducers/index';
import * as fromActions from '../actions/index';
import * as fromSelectors from './auth.selector';
import { Token, User } from '../../models';

describe('Auth Selectors', () => {
  let store: Store<fromReducers.AuthState>;

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
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          authReducer: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);
  });

  describe('getAuthStatusState', () => {
    test('should return state of auth with token, user and loggedIn', () => {
      let result;

      store
        .select(fromSelectors.getAuthStatusState)
        .subscribe(value => (result = value));

      expect(result).toEqual({
        loggedIn: false,
        user: null,
        token: null
      });

      store.dispatch(new fromActions.LoginSuccess({ user, token }));

      expect(result).toEqual({
        loggedIn: true,
        user: user,
        token: token
      });
    });
  });

  describe('getLoggedIn', () => {
    test('should return loggedIn', () => {
      let result;

      store
        .select(fromSelectors.getLoggedIn)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoginSuccess({ user, token }));

      expect(result).toEqual(true);
    });
  });

  describe('getUser', () => {
    test('should return user', () => {
      let result;

      store.select(fromSelectors.getUser).subscribe(value => (result = value));

      expect(result).toEqual(null);

      store.dispatch(new fromActions.LoginSuccess({ user, token }));

      expect(result).toEqual(user);
    });
  });

  describe('getToken', () => {
    test('should return token', () => {
      let result;

      store.select(fromSelectors.getToken).subscribe(value => (result = value));

      expect(result).toEqual(null);

      store.dispatch(new fromActions.LoginSuccess({ user, token }));

      expect(result).toEqual(token);
    });
  });
});
