import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { requestSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
