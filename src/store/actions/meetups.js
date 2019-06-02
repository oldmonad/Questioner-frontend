import {
  fetchMeetupRequest,
  createMeetupRequest,
  fetchSingleMeetupRequest,
} from '../../api/meetups';
import {
  FETCH_MEETUPS_INITIALIZED,
  FETCH_MEETUPS_SUCCESS,
  FETCH_MEETUPS_ERROR,
  CREATE_MEETUPS_INITIALIZED,
  CREATE_MEETUPS_SUCCESS,
  CREATE_MEETUPS_ERROR,
  FETCH_SINGLE_MEETUP_INITIALIZED,
  FETCH_SINGLE_MEETUP_SUCCESS,
  FETCH_SINGLE_MEETUP_ERROR,
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

export const createMeetupIntialize = () => {
  return {
    type: CREATE_MEETUPS_INITIALIZED,
  };
};

export const createMeetupSuccess = response => {
  return {
    type: CREATE_MEETUPS_SUCCESS,
    response,
  };
};

export const createMeetupError = error => {
  return {
    type: CREATE_MEETUPS_ERROR,
    error,
  };
};

export const fetchSingleMeetupIntialize = () => {
  return {
    type: FETCH_SINGLE_MEETUP_INITIALIZED,
  };
};

export const fetchSingleMeetupSuccess = response => {
  return {
    type: FETCH_SINGLE_MEETUP_SUCCESS,
    response,
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

export const createMeetup = (history, meetupData) => {
  return async dispatch => {
    try {
      const payload = {
        topic: meetupData.topic,
        location: meetupData.location,
        happeningOn: meetupData.time,
      };
      dispatch(createMeetupIntialize());
      const {
        data: { data, status },
      } = await createMeetupRequest(payload);
      dispatch(createMeetupSuccess(data));
      dispatch(fetchSingleMeetupSuccess(data));
      status === 201 ? history.push(`/meetup=${data.id}`) : '';
    } catch ({ response }) {
      response.status === 404 ? history.push('/404') : '';
      dispatch(createMeetupError([response.data.error]));
    }
  };
};

export const fetchOneMeetup = (meetupId, history) => {
  return async dispatch => {
    try {
      dispatch(fetchSingleMeetupIntialize());
      const {
        data: { data },
      } = await fetchSingleMeetupRequest(meetupId);
      dispatch(fetchSingleMeetupSuccess(data));
    } catch ({ response: { data } }) {
      dispatch(fetchSingleMeetupError([data]));
    }
  };
};
