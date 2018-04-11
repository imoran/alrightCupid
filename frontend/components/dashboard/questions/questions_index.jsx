import React from 'react';
import Slider from 'react-slick';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {},
      response: '',
      questions: []
    };
  }

  componentDidMount() {
    this.props.receiveQuestions()
    .then(() => {
      this.setState({questions: this.props.questions});
      // console.log("QuestionsIndex props =>", this.props);
      console.log("this.state ", this.state);
    });
  }

  yes(e) {
    console.log("yes ");
  }

  no(e) {
    console.log("no ");
  }

  render() {
    const { questions } = this.props;
    const { users } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="dashboard-questions">
        <Slider {...settings} className="dashboard-question-box">
          {questions.map((el, idx) => (
            <div key={idx}>
              <h1>IMPROVE YOUR MATCHES</h1>
              {el.title}
              <button onClick={this.yes}>Yes</button>
              <button onClick={this.no}>No</button>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}


export default QuestionsIndex;
