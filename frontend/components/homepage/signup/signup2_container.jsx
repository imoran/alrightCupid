import { connect } from 'react-redux';
import { updateUserInfo } from '../../../actions/signup_actions';
import React from 'react';
import SignUp2 from './signup2';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  user: state.ui.signup
});

const mapDispatchToProps = dispatch => ({
  updateUserInfo: user => dispatch(updateUserInfo(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp2);
