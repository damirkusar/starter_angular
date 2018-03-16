import * as fromRouter from './router.action';

describe('Router Actions', () => {

  describe('Go Action', () => {
    describe('Go', () => {
      test('should create an action', () => {
        const payload = { path: ['test'] };
        const action = new fromRouter.Go(payload);

        expect({ ...action }).toEqual({
          type: fromRouter.RouterActionTypes.Go,
          payload
        });
      });
    });
  });

  describe('Back Action', () => {
    describe('Back', () => {
      test('should create an action', () => {
        const action = new fromRouter.Back();

        expect({ ...action }).toEqual({
          type: fromRouter.RouterActionTypes.Back,
        });
      });
    });
  });

  describe('Forward Action', () => {
    describe('Forward', () => {
      test('should create an action', () => {
        const action = new fromRouter.Forward();

        expect({ ...action }).toEqual({
          type: fromRouter.RouterActionTypes.Forward,
        });
      });
    });
  });



});
