import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTokenReducer from './token.reducer';

export interface AuthState {
  token: fromTokenReducer.TokenState;
}

export const reducers: ActionReducerMap<AuthState> = {
  token: fromTokenReducer.reducer
};

export const getProductsState = createFeatureSelector<AuthState>('auth');
