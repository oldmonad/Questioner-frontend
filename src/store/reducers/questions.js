import {
  FETCH_QUESTION_INITIALIZED,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  CREATE_QUESTION_INITIALIZED,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_ERROR,
  FETCH_QUESTIONS_INITIALIZED,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
} from '../actions/types';

export const initialState = {
  isLoading: false,
  questions: [],
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
        question: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_QUESTION_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case FETCH_QUESTIONS_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    case CREATE_QUESTION_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, action.response],
        isLoading: false,
        errorResponse: [],
      };

    case CREATE_QUESTION_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
