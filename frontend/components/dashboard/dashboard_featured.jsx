import React from 'react';
import FeaturedIndexContainer from './featured/featured_index_container';

export default class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured-blue-section">
        <FeaturedIndexContainer />
      </div>
    );
  }
}
