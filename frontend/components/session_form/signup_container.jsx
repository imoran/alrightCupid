import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import SignUp from './signup';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
