import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { meetupReducer } from './meetups';
import { questionReducer } from './questions';
import { commentReducer } from './comments';

export default combineReducers({
  auth: authReducer,
  meetups: meetupReducer,
  questions: questionReducer,
  comments: commentReducer,
});
