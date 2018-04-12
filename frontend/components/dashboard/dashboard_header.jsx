import React from 'react';
import { withRouter } from 'react-router-dom';


class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    // console.log("dashboard_header props", this.props);
    this.logoutUser = this.logoutUser.bind(this);
    this.browseMatches = this.browseMatches.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  logoutUser() {
    this.props.logout(this.props.user);
  }

  browseMatches() {
    this.props.history.push('/match');
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="dashboard-header">

        <div className="dashboard-header-group">
          <ul className="dashboard-header-left">
            <li onClick={this.goHome}>Logo</li>
            <li onClick={this.browseMatches}>Browse Matches</li>
          </ul>

          <ul className="dashboard-header-right">
            <li>Profile</li>
            <li><button className="logout-button" onClick={this.logoutUser}>Logout</button></li>
          </ul>
        </div>

      </div>
    );
  }
}


export default withRouter(DashboardHeader);
