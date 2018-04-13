import React from 'react';
import Slider from 'react-slick';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {},
      question_answers: [],
      questions: []
    };
  }

  componentDidMount() {
    this.props.receiveQuestions()
    .then(() => {
      this.setState({questions: this.props.questions });
    });
    console.log("QUESTIONS INDEX STÅTE", this.state);
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
      arrows: false,
      draggable: true
    };
    return (
      <div className="dashboard-questions">
        <h1>IMPROVE YOUR MATCHES</h1>
        <Slider {...settings} className="dashboard-question-box">
          {questions.map((el, idx) => (
            <div key={idx}>
              {el.title}
              <div>
                <button onClick={this.yes}>Yes</button>
                <button onClick={this.no}>No</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}


export default QuestionsIndex;
