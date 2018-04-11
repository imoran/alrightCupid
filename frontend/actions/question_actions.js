import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestions = questions => dispatch => {
  return APIUtil.getAllQuestions()
  .then(qs => dispatch(receiveAllQuestions(qs)));
};
