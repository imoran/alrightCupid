import React from 'react';
import merge from 'lodash/merge';


class FormIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log("Form Index props =>", this.props);
    this.state = {
      response: ''
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleCreate(e) {
    e.preventDefault();
    const completePost = merge({}, {description_id: this.props.question.id,
      user_id: this.props.currentUser.id, response: this.state.response});
    this.props.createDescriptionResponse(completePost);
  }

  handleUpdate(e) {
    e.preventDefault();
    const updatePost = merge({}, { description_response: { description_response: this.props.question.id }});
    this.props.updateDescriptionResponse(updatePost);
  }


  render() {
    return (
      <div>
        <form className="description-form">
          <label className="description-label">{this.props.question.title}</label>
          <br />
          <textarea
            value={this.state.response}
            onChange={this.update('response')}
            placeholder= {this.props.currentUser ? this.props.currentUser.description_responses[this.props.question.id - 1] : "Your Response"}>
          </textarea>
          <br />
          <button onClick={this.handleCreate} type="submit">Write your Response</button>
          <button onClick={this.handleUpdate} type="submit">Edit your Response</button>
          <br />
        </form>
      </div>
    );
  }
}

export default FormIndex;
