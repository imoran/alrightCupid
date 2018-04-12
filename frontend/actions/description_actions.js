import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_DESCRIPTION_QUESTIONS = 'RECEIVE_ALL_DESCRIPTION_QUESTIONS';

export const receiveAllDescriptions = descriptions => ({
  type: RECEIVE_ALL_DESCRIPTION_QUESTIONS,
  descriptions
});

export const receiveAllDescriptionQuestions = descriptionQuestions => dispatch => {
  return APIUtil.receiveAllDescriptionQuestions()
  .then(questions => dispatch(receiveAllDescriptions(questions)))
};
