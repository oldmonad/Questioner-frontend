import { http } from '../../../src/api/client';

import {
  fetchMeetupIntialize,
  fetchMeetupSuccess,
  fetchMeetupError,
  fetchSingleMeetupIntialize,
  fetchSingleMeetupSuccess,
  fetchSingleMeetupError,
} from '../../../src/store/actions/meetups';

import { meetupReducer } from '../../../src/store/reducers/meetups';

import { setupStore } from '../../../src/utils/setupStore';
let store;

export const initialState = {
  isLoading: false,
  errorResponse: {},
  meetups: { status: '' },
  meetup: {},
};

describe('auth reducer test suite', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should return default state', () => {
    const state = meetupReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return fethcMetupInitialized reducer', () => {
    const action = fetchMeetupIntialize();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return fetchmeetups success reducer', () => {
    const action = fetchMeetupSuccess();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.meetups).toEqual(action.response);
  });

  it('should return fetch meetups failure reducer', () => {
    const action = fetchMeetupError();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });

  it('should return fetchSingleMeetupIntialize reducer', () => {
    const action = fetchSingleMeetupIntialize();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return login success reducer', () => {
    const action = fetchSingleMeetupSuccess();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.meetup).toEqual(action.response);
  });

  it('should return fetch meetups failure reducer', () => {
    const action = fetchSingleMeetupError();
    const state = meetupReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
