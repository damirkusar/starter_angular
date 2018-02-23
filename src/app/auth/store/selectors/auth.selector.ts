import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('authReducer');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const getToken = createSelector(
  selectAuthStatusState,
  fromAuth.getToken
);
