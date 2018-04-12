import { RECEIVE_ALL_QUESTION_ANSWERS } from '../actions/question_response_actions';
import merge from 'lodash/merge';


export default function  questionActionReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTION_ANSWERS:
      return merge({}, state, action.questionAnswers);
    default:
      return state;
  }
}
