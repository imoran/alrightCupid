import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { signin } from '../../actions/session_actions';
import Header from './header';


const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  signin: user => dispatch(signin(user))
});



export default connect(null, mapDispatchToProps)(Header);
