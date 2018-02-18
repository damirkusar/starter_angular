import { Action } from '@ngrx/store';

import { User } from '../../models';

export const LOAD_LOGGEDINUSER = '[Auth] Load LoggedIn User';
export const LOAD_LOGGEDINUSER_FAIL = '[Auth] Load LoggedIn User Fail';
export const LOAD_LOGGEDINUSER_SUCCESS = '[Auth] Load LoggedIn User Success';

export class LoadLoggedInUser implements Action {
  readonly type = LOAD_LOGGEDINUSER;
}

export class LoadLoggedInUserFail implements Action {
  readonly type = LOAD_LOGGEDINUSER_FAIL;
  constructor(public payload: any) {}
}

export class LoadLoggedInUserSuccess implements Action {
  readonly type = LOAD_LOGGEDINUSER_SUCCESS;
  constructor(public payload: User) {}
}

// action types
export type Actions =
  | LoadLoggedInUser
  | LoadLoggedInUserFail
  | LoadLoggedInUserSuccess;
