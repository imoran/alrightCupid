import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
