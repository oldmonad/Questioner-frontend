import axios from 'axios';
import { getToken } from '../utils/helpers';

export const http = axios.create({
  baseURL: 'https://questioner-backend.herokuapp.com/api/v1',
  headers: {
    Bearer: getToken(),
  },
});
