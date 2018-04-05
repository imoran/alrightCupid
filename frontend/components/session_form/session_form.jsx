import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form className="session_form" onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>
        <br />
          <span className="input">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Your username"
              />
          </span>
          <br />
            <span className="input">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                />
            </span>
            <br />
            <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
