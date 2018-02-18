import * as fromTokenActions from '../actions/token.action';
import { Token } from '../../models';

export interface TokenState {
  token: Token;
  loaded: boolean;
  loading: boolean;
  cachedAt: Date;
}

export const initialState: TokenState = {
  token: {},
  loaded: false,
  loading: false,
  cachedAt: null
};

export function reducer(
  state = initialState,
  action: fromTokenActions.Actions
): TokenState {
  switch (action.type) {
    case fromTokenActions.LOAD_TOKEN: {
      return {
        ...state,
        loading: true
      };
    }

    case fromTokenActions.LOAD_TOKEN_SUCCESS: {
      const token: Token = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        token,
        cachedAt: new Date()
      };
    }

    case fromTokenActions.LOAD_TOKEN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
}

export const getToken = (state: TokenState) => state.token;
export const getTokenLoading = (state: TokenState) => state.loading;
export const getTokenLoaded = (state: TokenState) => state.loaded;
export const getTokenCachedAt = (state: TokenState) => state.cachedAt;
