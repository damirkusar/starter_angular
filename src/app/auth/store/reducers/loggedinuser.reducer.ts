import * as fromUserActions from '../actions/loggedInUser.action';
import { User } from '../../models';

export interface LoggedInUserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  cachedAt: Date;
}

export const initialState: LoggedInUserState = {
  user: {},
  loaded: false,
  loading: false,
  cachedAt: null
};

export function reducer(
  state = initialState,
  action: fromUserActions.Actions
): LoggedInUserState {
  switch (action.type) {
    case fromUserActions.LOAD_LOGGEDINUSER: {
      return {
        ...state,
        loading: true
      };
    }

    case fromUserActions.LOAD_LOGGEDINUSER_SUCCESS: {
      const user: User = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        user,
        cachedAt: new Date()
      };
    }

    case fromUserActions.LOAD_LOGGEDINUSER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        user: {}
      };
    }
  }
}

export const getLoggedInUser = (state: LoggedInUserState) => state.user;
export const getLoggedInUserLoading = (state: LoggedInUserState) =>
  state.loading;
export const getLoggedInUserLoaded = (state: LoggedInUserState) => state.loaded;
export const getLoggedInUserCachedAt = (state: LoggedInUserState) =>
  state.cachedAt;
