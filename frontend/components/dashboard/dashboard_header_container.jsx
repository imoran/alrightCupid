import React from 'react';
import { connect } from 'react-redux';
import DashboardHeader from './dashboard_header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
