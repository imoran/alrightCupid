import { connect } from 'react-redux';
import { requestAllUsers } from '../../../actions/user_actions';
import { selectAllUsers } from '../../../reducers/selectors/selectors';
import Snapshot from './snapshot_index.jsx';
import values from 'lodash/values';

const mapStateToProps = state => ({
  users: selectAllUsers(state)
});


const mapDispatchToProps = dispatch => ({
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Snapshot);
