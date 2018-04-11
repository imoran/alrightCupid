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
          <label>
            {this.props.questions.map(q => <li>{q.title}</li>)}
          </label>
        </form>
      </div>
    );
  }
}

export default QuestionsIndex;
