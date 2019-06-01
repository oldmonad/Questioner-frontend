import {
  FETCH_QUESTION_INITIALIZED,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_QUESTION_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
