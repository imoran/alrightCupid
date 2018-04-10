import React from 'react';
import FeaturedIndexItem from './featured_index_item';
import Slider from 'react-slick';


class FeaturedIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers().
    then(() => console.log("Featured index props =>", this.props));
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      centerPadding: '30px',
    };
    const { users } = this.props;
    return (
      <div className="random">
        <Slider {...settings}>
            {users.map(function(el, idx) {
              return(
              <div className="slider-img">
                <h3><img src={el.image_url} />{el.first_name}</h3>
              </div>)
            })}
        </Slider>
      </div>
    );
  }
}

export default FeaturedIndex;
