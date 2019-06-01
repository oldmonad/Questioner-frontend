import {
  FETCH_MEETUPS_INITIALIZED,
  FETCH_MEETUPS_SUCCESS,
  FETCH_MEETUPS_ERROR,
  CREATE_MEETUPS_INITIALIZED,
  CREATE_MEETUPS_SUCCESS,
  CREATE_MEETUPS_ERROR,
  FETCH_SINGLE_MEETUPS_INITIALIZED,
  FETCH_SINGLE_MEETUPS_SUCCESS,
  FETCH_SINGLE_MEETUPS_ERROR,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
};

export const meetupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETUPS_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_MEETUPS_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_MEETUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case CREATE_MEETUPS_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_MEETUPS_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case CREATE_MEETUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case FETCH_SINGLE_MEETUPS_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_SINGLE_MEETUPS_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_SINGLE_MEETUPS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
