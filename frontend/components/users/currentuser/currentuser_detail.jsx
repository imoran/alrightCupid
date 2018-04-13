import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHeaderContainer from '../../dashboard/dashboard_header_container';
import DashboardFooter from '../../dashboard/dashboard_footer';
import FormIndex from './form_index';


class CurrentUserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      description_questions: [],
      description_responses: {1: "", 2: "", 3: "", 4: ""}
    };
    console.log("current User detail props =>", this.props);

  }

  componentDidMount() {
    this.props.receiveAllDescriptionQuestions()
    .then(question => {
      this.setState({ description_questions: this.props.description_questions });
    });
    this.props.requestSingleUser(this.props.match.params.userId)
    .then(user => {
      this.setState({user: user.user});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }


  handleChange(id) {
    return (e) => {
      this.setState({ description_responses: {[id]: e.target.value}});
    };
  }

  render() {
    return (
      <div className="users-main-body">
        <DashboardHeaderContainer />
        <div className="users-background-blue" />
        <div className="user-group">
          <img src={this.props.currentUser.image_url} alt={this.props.currentUser.first_name} />
          <div className="user-description">
            <h1>{this.props.currentUser.first_name}</h1>
            <div>
              <p>{this.props.currentUser.age}</p>
              <p>{this.props.currentUser.city}, {this.props.currentUser.state}</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="xx">
          <div className="user-description-questions">
            <form onSubmit={this.handleSubmit}>
              {
                this.state.description_questions.map(question =>
                  <div>
                    <FormIndex question={question} currentUser={this.props.currentUser}/>
                  </div>
                )
              }
            </form>
          </div>
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default CurrentUserDetail;




// <label key={question.id}>{question.title}</label>
// <input type="textarea"
//   value={this.state.description_responses[question.id]}
//   onChange={this.handleChange(question.id)}></input>


// <div className="users-main-body">
//   <DashboardHeaderContainer />
//   <div className="users-background-blue" />
//   <div className="user-group">
//     <img src={this.props.currentUser.image_url} alt={this.props.currentUser.first_name} />
//     <div className="user-description">
//       <h1>{this.props.currentUser.first_name}</h1>
//       <div>
//         <p>{this.props.currentUser.age}</p>
//         <p>{this.props.currentUser.city}, {this.props.currentUser.state}</p>
//       </div>
//       <div>
//       </div>
//     </div>
//   </div>
//
//   <div className="xx">
//     <div className="user-description-questions">
//       {
//         this.state.description_questions.map(question =>
//           <div>
//             <h1 key={question.id}>{question.title}</h1>
//             <p>{this.props.currentUser.description_responses}</p>
//           </div>
//         )
//       }
//     </div>
//   </div>
//   <DashboardFooter />
// </div>
//
