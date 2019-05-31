import { toast } from 'react-toastify';
import {
  SIGNUP_INITIALIZED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_INITIALIZED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_INITIALIZED,
  LOGOUT_SUCCESS,
} from './types';
import {
  setToken,
  encodeUserObject,
  destroyEncodedUser,
  destroyToken,
  getEncodedUser,
} from '../../api/helpers';

import { signUpRequest, loginRequest } from '../../api/auth';

export const signUpIntialize = () => {
  return {
    type: SIGNUP_INITIALIZED,
  };
};

export const signUpSuccess = response => {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
};

export const signUpError = error => {
  return {
    type: SIGNUP_FAILED,
    error,
  };
};

export const loginInitialized = () => {
  return {
    type: LOGIN_INITIALIZED,
  };
};

export const loginSuccess = response => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const loginError = error => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

export const logoutInitialize = () => {
  return {
    type: LOGOUT_INITIALIZED,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const signupUser = (userData, history, redirectUrl) => {
  return async dispatch => {
    try {
      dispatch(signUpIntialize());
      const { data } = await signUpRequest(userData);
      history.push('/upcoming-meetups');
      dispatch(signUpSuccess(data));
    } catch (err) {
      const { error } = err.response.data;
      dispatch(signUpError([error]));
    }
  };
};

export const loginUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(loginInitialized());
      const { data } = await loginRequest(userData);
      setToken(data.data.token);
      const authenticatedUser = {
        admin: data.data.admin,
        firstname: data.data.first_name,
        email: data.data.email,
        username: data.data.user_name,
      };
      encodeUserObject(authenticatedUser);
      dispatch(loginSuccess(authenticatedUser));
      toast.success(data.message);
      history.push('/upcoming-meetups');
    } catch (err) {
      const { error } = err.response.data;
      dispatch(loginError([error]));
    }
  };
};

export const autoLogin = (userObject = {}) => {
  return async dispatch => {
    try {
      dispatch(loginInitialize());
      userObject = getEncodedUser();
      dispatch(loginSuccess(userObject));
    } catch (error) {
      toast.error(error.message);
      dispatch(loginError(error));
    }
  };
};
export const logout = () => {
  return async dispatch => {
    dispatch(logoutInitialize());
    destroyEncodedUser();
    destroyToken();
    dispatch(logoutSuccess());
    location.reload();
  };
};
