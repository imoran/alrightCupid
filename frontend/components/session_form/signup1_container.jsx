import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/signup_actions';
import SignUp1 from './signup1';


const mapStateToProps = (state) => ({
    errors: state.errors.session,
    user: state.ui.signup
});

const mapDispatchToProps = dispatch => ({
  updateUserInfo: user => dispatch(updateUserInfo(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp1);
