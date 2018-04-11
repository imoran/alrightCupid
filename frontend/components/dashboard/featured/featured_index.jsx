import React from 'react';
import Slider from 'react-slick';


class FeaturedIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers();
    // .then(() => console.log("Featured index props =>", this.props));
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
        <div className="featured-carousel">
          <Slider {...settings}>
            {users.map(function(el, idx) {
              return (
                <div className="slider-img" key={idx}>
                  <h3><img src={el.image_url} />{el.first_name}</h3>
                </div>);
              })}
            </Slider>
        </div>
      </div>
    );
  }
}

export default FeaturedIndex;
