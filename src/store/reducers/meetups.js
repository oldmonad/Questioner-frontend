import {
  FETCH_MEETUPS_INITIALIZED,
  FETCH_MEETUPS_SUCCESS,
  FETCH_MEETUPS_ERROR,
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

    default:
      return state;
  }
};
