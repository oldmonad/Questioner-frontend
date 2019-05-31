import { fetchMeetupRequest } from '../../api/meetups';
import {
  FETCH_MEETUPS_INITIALIZED,
  FETCH_MEETUPS_SUCCESS,
  FETCH_MEETUPS_ERROR,
} from './types';

export const fetchMeetupIntialize = () => {
  return {
    type: FETCH_MEETUPS_INITIALIZED,
  };
};

export const fetchMeetupSuccess = response => {
  return {
    type: FETCH_MEETUPS_SUCCESS,
    response,
  };
};

export const fetchMeetupError = error => {
  return {
    type: FETCH_MEETUPS_ERROR,
    error,
  };
};

export const fetchMeetups = () => {
  return async dispatch => {
    try {
      dispatch(fetchMeetupIntialize());
      const { data } = await fetchMeetupRequest();
      dispatch(fetchMeetupSuccess(data));
    } catch (error) {
      dispatch(fetchMeetupError([error]));
    }
  };
};
