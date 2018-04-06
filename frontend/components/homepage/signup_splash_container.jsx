import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { createANewUser } from '../../actions/signup_actions';
import SignupSplash from './signup_splash';


const mapStateToProps = (state) => ({
    errors: state.errors.session,
    user: state.ui.signup
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(createANewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupSplash);
