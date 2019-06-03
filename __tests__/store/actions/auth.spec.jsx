import { http } from '../../../src/api/client';

import {
  signUpIntialize,
  signUpSuccess,
  signUpError,
  loginInitialized,
  loginSuccess,
  signupUser,
} from '../../../src/store/actions/auth';

import {
  SIGNUP_INITIALIZED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_INITIALIZED,
  LOGIN_SUCCESS,
} from '../../../src/store/actions/types';

import { setupStore } from '../../../src/utils/setupStore';

let store;

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
  loggedInUser: null,
};

describe('SIGNUP ACTIONS', () => {
  const signupMockData = {
    status: 200,
    message: 'You are logged in as an admin',
    data: {
      id: 1,
      first_name: 'legolas',
      last_name: 'Aragorn',
      user_name: 'ShirePrince',
      email: 'legolaslegit@gmail.com',
      phone_number: '08135266484',
      admin: true,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTU1OTIzNjYxMCwiZXhwIjoxNTYwNDQ2MjEwfQ.432gvbGVoPiI9BBS98lCwgvtWYVaPsu_b9dPG74sK-0',
    },
  };

  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch an action for sign up request', () => {
    const action = {
      type: SIGNUP_INITIALIZED,
    };
    expect(signUpIntialize()).toEqual(action);
  });

  it('should dispatch an action for sign up success', () => {
    const response = {};
    const action = {
      type: SIGNUP_SUCCESS,
      response,
    };
    expect(signUpSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: SIGNUP_FAILED,
      error,
    };
    expect(signUpError(error)).toEqual(action);
  });

  it('should dispatch a failed signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'SIGNUP_INITIALIZED' },
      { type: 'SIGNUP_ERROR' },
    ];
    store.dispatch(signupUser()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('LOGIN ACTIONS', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch an action for login up request', () => {
    const action = {
      type: LOGIN_INITIALIZED,
    };
    expect(loginInitialized()).toEqual(action);
  });

  it('should dispatch an action for login up success', () => {
    const response = {};
    const action = {
      type: LOGIN_SUCCESS,
      response,
    };
    expect(loginSuccess(response)).toEqual(action);
  });
});
