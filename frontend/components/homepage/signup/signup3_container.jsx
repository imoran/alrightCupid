import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../../actions/session_actions';
import SignUp3 from './signup3';

const mapStateToProps = (state) => ({
  user: state.ui.signup
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp3);
