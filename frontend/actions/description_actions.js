import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_DESCRIPTION_QUESTIONS = 'RECEIVE_ALL_DESCRIPTION_QUESTIONS';

export const receiveAllDescriptions = description_questions => ({
  type: RECEIVE_ALL_DESCRIPTION_QUESTIONS,
  description_questions
});

export const receiveAllDescriptionQuestions = () => dispatch => {
  return APIUtil.receiveAllDescriptionQuestions()
  .then(questions => dispatch(receiveAllDescriptions(questions)));
};
