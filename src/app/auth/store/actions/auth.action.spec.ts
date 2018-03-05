import * as fromAuth from './auth.action';

describe('Auth Actions', () => {
  describe('Logout', () => {
    it('should create an action', () => {
      const action = new fromAuth.Logout();

      expect({ ...action }).toEqual({
        type: fromAuth.AuthActionTypes.Logout,
      });
    });
  });

});
