import React from 'react';
import FeaturedIndexItem from './featured_index_item';

class FeaturedIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers().
    then(() => console.log("Featured index props =>", this.props));
  }

  render() {
    const { users } = this.props;
    console.log("users  =>", users);
    return (
      <div className="outer-carousel">
        <ul className="featured-carousel">
          {users.map(function(el, idx) {
              return(<li><img src={el.image_url} />{el.first_name}</li>)
            })}
        </ul>
      </div>
    );
  }
}

export default FeaturedIndex;
