import {
  FETCH_COMMENTS_INITIALIZED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './types';

export const fetchQuestionIntialize = () => {
  return {
    type: FETCH_COMMENTS_INITIALIZED,
  };
};

export const fetchQuestionSuccess = response => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    response,
  };
};

export const fetchQuestionError = error => {
  return {
    type: FETCH_COMMENTS_ERROR,
    error,
  };
};
