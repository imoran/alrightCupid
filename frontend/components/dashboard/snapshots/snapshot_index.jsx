import React from 'react';
import Slider from 'react-slick';


class SnapshotIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllUsers().
    then(() => console.log("Snapshot index props =>", this.props));
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
            {users.map((el, idx) => (
              <div className="snapshot-slider" key={idx}>
                <h3><img src={el.image_url} /></h3>
                <p>{el.motto}</p>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default SnapshotIndex;
