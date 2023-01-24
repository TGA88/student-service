import { utilsJwtAuthorizer } from './utils-jwt-authorizer';

describe('utilsJwtAuthorizer', () => {
  it('should work', () => {
    expect(utilsJwtAuthorizer()).toEqual('utils-jwt-authorizer');
  });
});
