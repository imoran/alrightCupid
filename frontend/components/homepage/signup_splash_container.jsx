import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupSplash from './signup_splash';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupSplash);
