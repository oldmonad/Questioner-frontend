import { fetchQuestionRequest } from '../../api/questions';

import {
  FETCH_QUESTION_INITIALIZED,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
} from './types';

export const fetchQuestionIntialize = () => {
  return {
    type: FETCH_QUESTION_INITIALIZED,
  };
};

export const fetchQuestionSuccess = response => {
  return {
    type: FETCH_QUESTION_SUCCESS,
    response,
  };
};

export const fetchQuestionError = error => {
  return {
    type: FETCH_QUESTION_ERROR,
    error,
  };
};

export const fetchQuestion = questionId => {
  return async dispatch => {
    try {
      dispatch(fetchQuestionIntialize());
      const {
        data: { data },
      } = await fetchQuestionRequest(questionId);
      dispatch(fetchQuestionSuccess(data));
      console.log(data);
    } catch ({ response: { data } }) {
      dispatch(fetchQuestionError([data]));
    }
  };
};
