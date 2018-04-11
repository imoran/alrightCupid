import React from 'react';
import { withRouter } from 'react-router-dom';
import DashboardHeaderContainer from '../dashboard/dashboard_header_container';
import DashboardFooter from '../dashboard/dashboard_footer';


class MatchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    let { users } = this.props;
    return (
      <div className="match">
        <DashboardHeaderContainer />
        <div className="match-main">
          <div className="match-main-group">
            {users.map((el, idx) =>
              <div key={idx} className="match-user">
                <img src={el.image_url}></img>
                
                {el.first_name}
              </div>
            )}
          </div>
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default withRouter(MatchIndex);
