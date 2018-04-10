export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveQuestions = questions => dispatch => (
  dispatch(receiveAllQuestions(questions))
);
