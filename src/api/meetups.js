import { http } from './client';

export const fetchMeetupRequest = async () => {
  return await http.get('/meetups');
};
