import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { meetupReducer } from './meetups';
import { questionReducer } from './questions';

export default combineReducers({
  auth: authReducer,
  meetups: meetupReducer,
  question: questionReducer,
});
