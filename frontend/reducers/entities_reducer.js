import { combineReducers } from 'redux';
import users from './user_reducer';
import questions from './questions_reducer';
import description_questions from './description_reducer';
import question_answers from './question_answer_reducer';
import description_responses from './description_response_reducer';

export default combineReducers({
  users,
  questions,
  description_questions,
  question_answers,
  description_responses
});
