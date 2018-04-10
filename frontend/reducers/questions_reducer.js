import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';

export default function questionsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
