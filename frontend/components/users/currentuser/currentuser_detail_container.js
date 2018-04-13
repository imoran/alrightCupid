import { connect } from 'react-redux';
import CurrentUserDetail  from './currentUser_detail';
import { requestSingleUser } from '../../../actions/user_actions';
import { receiveAllDescriptionQuestions } from '../../../actions/description_actions';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => ({
  description_questions: values(state.entities.description_questions),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  receiveAllDescriptionQuestions: () => dispatch(receiveAllDescriptionQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserDetail);
