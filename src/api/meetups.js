import { http } from './client';

export const fetchMeetupRequest = async () => {
  return await http.get('/meetups');
};

export const createMeetupRequest = async credentials => {
  return await http.post('/meetups', credentials);
};

export const fetchSingleMeetupRequest = async meetupId => {
  return await http.get(`/meetups/${meetupId}`);
};
