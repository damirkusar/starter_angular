import * as fromAuth from './auth.action';

describe('Auth Actions', () => {

  describe('Login Action', () => {
    describe('Login', () => {
      test('should create an action', () => {
        const payload = { username: 'test', password: 'password' };
        const action = new fromAuth.Login(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.Login,
          payload
        });
      });
    });

    describe('LoginSuccess', () => {
      test('should create an action', () => {
        const payload = {
          user: {
            userId: '123'
          }, token: {
            token_type: 'Bearer',
            access_token: 'RandomString',
            expires_in: 7,
            id_token: 'RandomString'
          }
        };
        const action = new fromAuth.LoginSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.LoginSuccess,
          payload
        });
      });
    });

    describe('LoginFailure', () => {
      test('should create an action', () => {
        const payload = { error: 'someError' };
        const action = new fromAuth.LoginFailure(payload);

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.LoginFailure,
          payload
        });
      });
    });

    describe('LoginRedirect', () => {
      test('should create an action', () => {
        const action = new fromAuth.LoginRedirect();

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.LoginRedirect
        });
      });
    });
  });

  describe('Logout Actions', () => {
    describe('Logout', () => {
      test('should create an action', () => {
        const action = new fromAuth.Logout();

        expect({ ...action }).toEqual({
          type: fromAuth.AuthActionTypes.Logout,
        });
      });
    });
  });

});
