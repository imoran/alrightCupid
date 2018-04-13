import React from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';


class SnapshotIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
  }

  userProfile(id) {
    return () => {
      this.props.history.push(`/users/${id}`);
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
    };
    const { users } = this.props;

    return (
      <div className="snapshots-carousel">
        <h1>Snapshots</h1>
        <Slider {...settings}>
            {users.map((user, idx) => (
              <div className="snapshot-slider" key={idx}
                onClick={this.userProfile(user.id)}>
                <h3><img src={user.image_url} /></h3>
                <div className="snapshot-caption">
                  <p>{user.motto}</p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}


export default withRouter(SnapshotIndex);
