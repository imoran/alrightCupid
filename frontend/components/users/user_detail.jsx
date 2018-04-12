import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHeaderContainer from '../dashboard/dashboard_header_container';
import DashboardFooter from '../dashboard/dashboard_footer';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, description_questions: {} };
  }

  componentDidMount() {
    this.props.requestAllDescriptionQuestions()
    .then(questions => {
      this.setState({ description_questions: questions });
    });
    this.props.requestSingleUser(this.props.match.params.userId)
    .then(user => {
      this.setState({user: user.user});
      console.log("USER DETAIL PROPS =>", this.state);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  render() {
    let { user } = this.state;
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
              <p>{user.city}</p>
              <p>{user.state}</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="xx"></div>
        <DashboardFooter />
      </div>
    );
  }
}

export default UserDetail;
