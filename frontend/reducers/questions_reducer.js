import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';
import merge from 'lodash/merge';


export default function questionsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.questions);
    default:
      return state;
  }
}
