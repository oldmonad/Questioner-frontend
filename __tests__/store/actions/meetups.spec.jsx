import { http } from '../../../src/api/client';

import {
  fetchMeetupIntialize,
  fetchMeetupSuccess,
  fetchMeetupError,
  fetchSingleMeetupIntialize,
  fetchSingleMeetupSuccess,
  fetchSingleMeetupError,
  fetchMeetups,
} from '../../../src/store/actions/meetups';

import {
  FETCH_MEETUPS_INITIALIZED,
  FETCH_MEETUPS_SUCCESS,
  FETCH_MEETUPS_ERROR,
  FETCH_SINGLE_MEETUP_INITIALIZED,
  FETCH_SINGLE_MEETUP_SUCCESS,
  FETCH_SINGLE_MEETUP_ERROR,
} from '../../../src/store/actions/types';

import { setupStore } from '../../../src/utils/setupStore';

let store;

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
  loggedInUser: null,
};

describe('MEETUP ACTIONS', () => {
  const meetupMockData = {
    status: 200,
    message: 'Meetup Found',
    data: {
      id: 1,
      user_id: 1,
      topic: 'Google DevFest',
      location: 'Landmark Event Center, Lagos, Nigeria.',
      happening_on: '2020-03-25T12:00:00Z',
      image_url:
        'https://build.techpoint.ng/wp-content/uploads/2018/02/slide_1.jpg',
      created_on: '2019-05-30T19:09:44.771Z',
    },
  };

  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch an action for GET meetups', () => {
    const action = {
      type: FETCH_MEETUPS_INITIALIZED,
    };
    expect(fetchMeetupIntialize()).toEqual(action);
  });

  it('should dispatch an action for GET meetup success', () => {
    const response = {};
    const action = {
      type: FETCH_MEETUPS_SUCCESS,
      response,
    };
    expect(fetchMeetupSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for a GET meetup error', () => {
    const error = '';
    const action = {
      type: FETCH_MEETUPS_ERROR,
      error,
    };
    expect(fetchMeetupError(error)).toEqual(action);
  });

  it('should dispatch an action for GET meetup', () => {
    const action = {
      type: FETCH_SINGLE_MEETUP_INITIALIZED,
    };
    expect(fetchSingleMeetupIntialize()).toEqual(action);
  });

  it('should dispatch an action for GET meetup', () => {
    const action = {
      type: FETCH_SINGLE_MEETUP_SUCCESS,
    };
    expect(fetchSingleMeetupSuccess()).toEqual(action);
  });

  it('should dispatch an action for GET meetup', () => {
    const action = {
      type: FETCH_SINGLE_MEETUP_ERROR,
    };
    expect(fetchSingleMeetupError()).toEqual(action);
  });
  it('should dispatch a successful action that fetches all meetups', () => {
    http.get = jest
      .fn()
      .mockReturnValue(Promise.resolve({ data: meetupMockData }));
    const expectedActions = [
      {
        type: 'FETCH_MEETUPS_INITIALIZED',
      },
      {
        type: 'FETCH_MEETUPS_SUCCESS',
        response: meetupMockData,
      },
    ];
    return store.dispatch(fetchMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
