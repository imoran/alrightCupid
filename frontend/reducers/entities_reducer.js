import { combineReducers } from 'redux';
import users from './user_reducer';
import questions from './questions_reducer';


export default combineReducers({
  users,
  questions
});
