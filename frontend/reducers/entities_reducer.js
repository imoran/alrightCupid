import { combineReducers } from 'redux';
import users from './user_reducer';
import questions from './questions_reducer';
import description_questions from './description_reducer';


export default combineReducers({
  users,
  questions,
  description_questions
});
