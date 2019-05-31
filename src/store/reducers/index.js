import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { meetupReducer } from './meetups';

export default combineReducers({ auth: authReducer, meetups: meetupReducer });
