import React from 'react';

class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveQuestions()
    .then(() => console.log("QuestionsIndex props =>", this.props));
  }

  render() {
    const { questions } = this.props;
    return(
      <div className="dashboard-form">
        <form>
            {this.props.questions.map((q, idx) => (
              <div key={idx}>{q.title}</div>
            ))}
        </form>
      </div>
    );
  }
}

export default QuestionsIndex;
