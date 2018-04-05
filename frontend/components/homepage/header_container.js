import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Header from './header';


const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(Header);
