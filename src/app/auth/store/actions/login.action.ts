import { Action } from '@ngrx/store';

import { Token } from '../../models';

export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGIN_SUCCESS = '[Auth] Login Success';

export class Login implements Action {
  readonly type = LOGIN;
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: Token) {}
}

// action types
export type Actions = Login | LoginFail | LoginSuccess;
