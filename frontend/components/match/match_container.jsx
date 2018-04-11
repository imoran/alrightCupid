import { connect } from 'react-redux';
import MatchIndex from './match_index';
import { requestAllUsers } from './../../actions/user_actions';
import { selectAllUsers } from './../../reducers/selectors/selectors';

const mapStateToProps = state => ({
  users: selectAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchIndex);
