import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { requestSingleUser } from '../../actions/user_actions';
import { receiveAllDescriptionQuestions } from '../../actions/description_actions';
import values from 'lodash/values';
// you want user to be able to post to the descriptions!!!

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  description_questions: values(state.entities.description_questions)
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  receiveAllDescriptionQuestions: () => dispatch(receiveAllDescriptionQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
