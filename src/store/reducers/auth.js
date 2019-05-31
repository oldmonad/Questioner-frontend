import {
  SIGNUP_INITIALIZED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_INITIALIZED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_INITIALIZED,
  LOGOUT_SUCCESS,
} from '../actions/types';

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
  loggedInUser: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isAuthenticated: true,
        isLoading: false,
        errorResponse: [],
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errorResponse: action.error,
      };

    case LOGIN_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isAuthenticated: true,
        isLoading: false,
        errorResponse: [],
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errorResponse: action.error,
      };

    case LOGOUT_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: null,
        successResponse: {},
        errorResponse: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
