import { connect } from 'react-redux';
import React from 'react';
import { signin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
