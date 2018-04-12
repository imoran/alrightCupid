import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_QUESTION_ANSWERS = 'RECEIVE_ALL_QUESTION_ANSWERS';

export const receiveAllQuestionAnswers = questionAnswers => ({
  type: RECEIVE_ALL_QUESTION_ANSWERS,
  questionAnswers
});


export const receiveQuestionAnswers = questionAnswers => dispatch => {
  return APIUtil.getAllQuestionAnswers()
  .then(answers => dispatch(receiveAllQuestionAnswers(answers)));
};
