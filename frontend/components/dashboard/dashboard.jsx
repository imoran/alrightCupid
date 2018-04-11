import React from 'react';
import DashboardHeaderContainer from './dashboard_header_container';
import Featured from './dashboard_featured';
import SnapshotIndexContainer from '../homepage/snapshots/snapshot_index_container';
import QuestionsIndexContainer from './questions_index_container';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log("Dashboard props =>", this.props);
  }

  render() {
    return (
      <div className="dashboard-main-body">
        <div>
          <DashboardHeaderContainer />
          <Featured />
          <h1>Snapshots</h1>
            <SnapshotIndexContainer />
          <QuestionsIndexContainer />
        </div>
      </div>
    );
  }
}
