import { AuthActions, AuthActionTypes } from '../actions';
import { User, Token } from '../../models';

export interface State {
  loggedIn: boolean;
  user: User | null;
  token: Token | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null,
  token: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token
      };
    }

    case AuthActionTypes.LoginFailure:
    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getToken = (state: State) => state.token;
