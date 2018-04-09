import React from 'react';

export default class Featured extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    return (
      <div className="featured-blue-section">
        featured people!
      </div>
    );
  }
}
