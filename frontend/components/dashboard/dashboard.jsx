import React from 'react';
import DashboardHeaderContainer from './dashboard_header_container';
import FeaturedContainer from './featured/featured_index_container';
import SnapshotIndexContainer from './snapshots/snapshot_index_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import DashboardFooter from './dashboard_footer';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Dashboard props =>", this.props);
  }

  render() {
    return (
      <div className="dashboard-background-blue">
        <DashboardHeaderContainer />
        <FeaturedContainer />
        <div className="dashboard-main-body">
          <SnapshotIndexContainer />
        </div>
        <DashboardFooter />
      </div>
    );
  }
}
