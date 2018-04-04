import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class Signup extends React.Component {
  constructor(props) {
    super(props);
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

  // renderErrors() {
  //   return (
  //     <ul>
  //
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>
            <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
            </label>
            <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default Signup;
