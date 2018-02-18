import { Action } from '@ngrx/store';

import { Token } from '../../models';

export const LOAD_TOKEN = '[Auth] Load Token';
export const LOAD_TOKEN_FAIL = '[Auth] Load Token Fail';
export const LOAD_TOKEN_SUCCESS = '[Auth] Load Token Success';

export class LoadToken implements Action {
  readonly type = LOAD_TOKEN;
}

export class LoadTokenFail implements Action {
  readonly type = LOAD_TOKEN_FAIL;
  constructor(public payload: any) {}
}

export class LoadTokenSuccess implements Action {
  readonly type = LOAD_TOKEN_SUCCESS;
  constructor(public payload: Token) {}
}

// action types
export type Actions = LoadToken | LoadTokenFail | LoadTokenSuccess;
