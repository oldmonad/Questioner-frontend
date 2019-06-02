import {
  FETCH_COMMENTS_INITIALIZED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.response,
        isLoading: false,
        comments: [],
      };

    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
