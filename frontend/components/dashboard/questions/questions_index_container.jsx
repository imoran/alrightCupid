import React from 'react';
import { connect } from 'react-redux';
import { receiveQuestions } from '../../../actions/question_actions';
import QuestionsIndex from './questions_index';
import values from 'lodash/values';

const mapStateToProps = state => ({
  questions: values(state.entities.questions)
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: () => dispatch(receiveQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);
