import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import SignUp from './signup';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  user: state.ui.signup
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
