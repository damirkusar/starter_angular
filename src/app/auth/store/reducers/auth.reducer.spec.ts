import * as fromAuth from './auth.reducer';
import * as fromAuthActions from '../actions/auth.action';

describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LoginSuccess action', () => {
    let payload: any;

    beforeEach(() => {
      payload = {
        user: {
          userId: '123'
        }, token: {
          token_type: 'Bearer',
          access_token: 'RandomString',
          expires_in: 7,
          id_token: 'RandomString'
        }
      };
    });

    it('should set loggedIn to true', () => {
      const { initialState } = fromAuth;
      const action = new fromAuthActions.LoginSuccess(payload);
      const state = fromAuth.reducer(undefined, action);

      expect(state.loggedIn).toBe(true);
    });

    it('should set user', () => {
      const { initialState } = fromAuth;
      const action = new fromAuthActions.LoginSuccess(payload);
      const state = fromAuth.reducer(undefined, action);

      expect(state.user).toBe(payload.user);
    });

    it('should set token', () => {
      const { initialState } = fromAuth;
      const action = new fromAuthActions.LoginSuccess(payload);
      const state = fromAuth.reducer(undefined, action);

      expect(state.token).toBe(payload.token);
    });

    it('should set state', () => {
      const { initialState } = fromAuth;
      const action = new fromAuthActions.LoginSuccess(payload);
      const state = fromAuth.reducer(undefined, action);

      expect({ ...state }).toEqual({
        loggedIn: true,
        token: payload.token,
        user: payload.user
      });
    });
  });
});
