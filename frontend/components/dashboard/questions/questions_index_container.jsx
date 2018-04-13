import React from 'react';
import { connect } from 'react-redux';
import { receiveQuestions } from '../../../actions/question_actions';
import { postResponse } from '../../../actions/question_response_actions';
import QuestionsIndex from './questions_index';
import values from 'lodash/values';

const mapStateToProps = state => ({
  questions: values(state.entities.questions),
  question_answers: values(state.entities.question_answers)
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: () => dispatch(receiveQuestions()),
  postResponse: response => dispatch(postResponse(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);
