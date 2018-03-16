import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('authReducer');

export const getAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  getAuthStatusState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(getAuthStatusState, fromAuth.getUser);

export const getToken = createSelector(
  getAuthStatusState,
  fromAuth.getToken
);
