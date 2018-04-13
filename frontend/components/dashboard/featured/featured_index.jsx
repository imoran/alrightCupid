import React from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';


class FeaturedIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
    // .then(() => console.log("Featured index props =>", this.props));
  }

  userProfile(id) {
    return () => {
      this.props.history.push(`/users/${id}`);
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
    };
    const { users } = this.props;
    return (
      <div className="dashboard-featured">
        <div className="dashboard-featured-top">
          <h2>Featured</h2>
          <SearchBarContainer />
        </div>
        <div className="featured-carousel">
          <Slider {...settings}>
            {users.map((el, idx) => (
              <div className="slider-img" key={idx}
                onClick={this.userProfile(el.id)}>
                <h3><img src={el.image_url} />{el.first_name}</h3>
              </div>
              ))}
            </Slider>
        </div>
      </div>
    );
  }
}

export default withRouter(FeaturedIndex);
