import {
  fetchQuestionRequest,
  fetchQuestionsRequest,
  createQuestionRequest,
} from '../../api/questions';

import {
  FETCH_QUESTION_INITIALIZED,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  FETCH_QUESTIONS_INITIALIZED,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  CREATE_QUESTION_INITIALIZED,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_ERROR,
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

export const fetchQuestionsIntialize = () => {
  return {
    type: FETCH_QUESTIONS_INITIALIZED,
  };
};

export const fetchQuestionsSuccess = response => {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    response,
  };
};

export const fetchQuestionsError = error => {
  return {
    type: FETCH_QUESTIONS_ERROR,
    error,
  };
};

export const createQuestionIntialize = () => {
  return {
    type: CREATE_QUESTION_INITIALIZED,
  };
};

export const createQuestionSuccess = response => {
  return {
    type: CREATE_QUESTION_SUCCESS,
    response,
  };
};

export const createQuestionError = error => {
  return {
    type: CREATE_QUESTION_ERROR,
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
    } catch ({ response: { data } }) {
      dispatch(fetchQuestionError([data]));
    }
  };
};

export const fetchQuestions = meetupId => {
  return async dispatch => {
    try {
      dispatch(fetchQuestionsIntialize());
      const {
        data: { data },
      } = await fetchQuestionsRequest(meetupId);
      dispatch(fetchQuestionsSuccess(data));
    } catch ({ response: { data } }) {
      dispatch(fetchQuestionError([data]));
    }
  };
};

export const createQuestion = questionData => {
  return async dispatch => {
    try {
      dispatch(createQuestionIntialize());
      const {
        data: { data },
      } = await createQuestionRequest(questionData);
      dispatch(createQuestionSuccess(data));
    } catch ({ response: { data } }) {
      dispatch(createQuestionError([data]));
    }
  };
};
