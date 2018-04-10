import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(null, mapDispatchToProps)(Dashboard);
