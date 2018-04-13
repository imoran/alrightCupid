import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHeaderContainer from '../dashboard/dashboard_header_container';
import DashboardFooter from '../dashboard/dashboard_footer';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      description_questions: [],
      description_responses: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.receiveAllDescriptionQuestions()
    .then(question => {
      this.setState({ description_questions: this.props.description_questions,
      description_responses: this.props.description_responses });
    });
    this.props.requestSingleUser(this.props.match.params.userId)
    .then(user => {
      this.setState({user: user.user});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  render() {
    console.log("USER DETAIL PROPS", this.props);
    let { user } = this.state;
    let { currentUser } = this.state;
    return (
      <div className="users-main-body">
        <DashboardHeaderContainer />
        <div className="users-background-blue" />
        <div className="user-group">
          <img src={user.image_url} alt={user.first_name} />
          <div className="user-description">
            <h1>{user.first_name}</h1>
            <div>
              <p>{user.age}</p>
              <p>{user.city}, {user.state}</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="xx">
          <div className="user-description-questions">
             {
               this.state.description_questions.map(question =>
                 <div>
                   <h1 key={question.id}>{question.title}</h1>
                   <p>{user.description_responses}</p>
                 </div>
               )
             }
          </div>
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default UserDetail;
