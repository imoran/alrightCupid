import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  step: state.ui.step
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
