import { http } from '../../../src/api/client';

import {
  signUpIntialize,
  signUpSuccess,
  signUpError,
  loginInitialized,
  loginSuccess,
} from '../../../src/store/actions/auth';

import { authReducer } from '../../../src/store/reducers/auth';

import { setupStore } from '../../../src/utils/setupStore';
let store;

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
  loggedInUser: null,
};

describe('auth reducer test suite', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should return default state', () => {
    const state = authReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signUpIntialize reducer', () => {
    const action = signUpIntialize();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return signup success reducer', () => {
    const action = signUpSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.loggedInUser).toEqual(action.response);
  });

  it('should return signup failure reducer', () => {
    const action = signUpError();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });

  it('should return loginIntialize reducer', () => {
    const action = loginInitialized();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return login success reducer', () => {
    const action = loginSuccess();
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.loggedInUser).toEqual(action.response);
  });
});
