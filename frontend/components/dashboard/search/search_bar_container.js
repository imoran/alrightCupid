import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchUser } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  searchUser: (searchStr) => dispatch(searchUser(searchStr))
});

export default connect(null, mapDispatchToProps)(SearchBar);
