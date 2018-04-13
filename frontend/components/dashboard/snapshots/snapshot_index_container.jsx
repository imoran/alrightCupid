import { connect } from 'react-redux';
import { requestAllUsers } from '../../../actions/user_actions';
import { selectAllUsers, searchUsers } from '../../../reducers/selectors/selectors';
import Snapshot from './snapshot_index.jsx';

const mapStateToProps = state => {
  if (state.session.searchTerm) {
    return {
      users: searchUsers(state, state.session.searchTerm)
    };
  } else {
    return {
      users: selectAllUsers(state)
    };
  }
};


const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Snapshot);
