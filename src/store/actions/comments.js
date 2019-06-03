import { fetchCommentsRequest } from '../../api/comments';
import {
  FETCH_COMMENTS_INITIALIZED,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './types';

export const fetchCommentsIntialize = () => {
  return {
    type: FETCH_COMMENTS_INITIALIZED,
  };
};

export const fetchCommentsSuccess = response => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    response,
  };
};

export const fetchCommentsError = error => {
  return {
    type: FETCH_COMMENTS_ERROR,
    error,
  };
};

export const fetchComments = questionId => {
  return async dispatch => {
    try {
      dispatch(fetchCommentsIntialize());
      const {
        data: { data },
      } = await fetchCommentsRequest(questionId);
      dispatch(fetchCommentsSuccess(data));
    } catch ({ response: { data } }) {
      dispatch(fetchCommentsError([data]));
    }
  };
};
