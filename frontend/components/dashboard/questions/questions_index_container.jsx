import React from 'react';
import { connect } from 'react-redux';
import { receiveQuestions } from '../../../actions/question_actions';
import { receiveAllQuestionAnswers } from '../../../actions/question_response_actions';
import QuestionsIndex from './questions_index';
import values from 'lodash/values';

const mapStateToProps = state => ({
  questions: values(state.entities.questions),
  question_responses: values(state.entities.question_answers)
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: () => dispatch(receiveQuestions()),
  receiveAllQuestionAnswers: () => dispatch(receiveAllQuestionAnswers())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);
