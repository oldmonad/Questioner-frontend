import axios from 'axios';
import { getToken } from '../api/helpers';

export const http = axios.create({
  baseURL: 'https://questioner-backend.herokuapp.com/api/v1',
  // baseURL: 'http://localhost:3000/api/v1',
  headers: {
    Authorization: getToken(),
  },
});
