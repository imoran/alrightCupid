import React from 'react';

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="dashboard-header">

        <div className="dashboard-header-group">
          <ul className="dashboard-header-left">
            <li>Logo</li>
            <li>Browse Matches</li>
          </ul>

          <ul className="dashboard-header-right">
            <li>picture</li>
            <li>nothing</li>
          </ul>
        </div>

      </div>
    );
  }
}
