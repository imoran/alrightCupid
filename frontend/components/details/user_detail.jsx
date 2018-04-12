import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHeaderContainer from '../dashboard/dashboard_header_container';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <DashboardHeaderContainer />
        <img src={user.image_url} alt={user.first_name} />
        {user.first_name}
        {user.age}
        {user.zipcode}
      </div>
    );
  }
}

export default UserDetail;
