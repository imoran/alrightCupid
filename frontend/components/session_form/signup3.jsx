import React from 'react';
import merge from 'lodash/merge';


export default class SignUp3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: [],
      passwordError: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorHandling = this.errorHandling.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  errorHandling() {
    let {username, password} = this.state;
    let usernameError = username.length === 0 ? ['Email is required'] : [];
    let passwordError = password.length <= 6 ? ['Password is required'] : [];
    this.setState({usernameError, passwordError});
    if (usernameError.length === 0 &&
        passwordError.length === 0) {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.errorHandling()) {
      let newUser = this.formatUser();
      console.log("newUser => ", newUser);
      let x = this.props.signup(newUser);
      console.log("signup result => ", x);
    }
  }

  formatUser() {
    let {username, password} = this.state;
    let newUser = merge({}, this.props.user, {username}, {password});
    return newUser;
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="e.g example@url.com"
            value={this.state.username}
            onChange={this.update('username')}
          />
        {Validation(this.state.usernameError)}
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            placeholder="6 characters minimum."
            value={this.state.password}
            onChange={this.update('password')}
          />
        {Validation(this.state.passwordError)}
        <br />
        <input type="submit" value="Next" />
      </form>
    );
  }
}

const Validation = (errors) => {
  return (
    <ul>
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  );
};
