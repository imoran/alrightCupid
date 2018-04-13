import React from 'react';
import merge from 'lodash/merge';
import HeaderContainer from '../header_container';
import { withRouter } from 'react-router-dom';


class SignUp3 extends React.Component {
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
      this.props.signup(newUser)
      .then(() => this.props.history.push('/dashboard'));
      // error handling
    }
  }

  formatUser() {
    let {username, password} = this.state;
    let newUser = merge({}, this.props.user, {username}, {password});
    return newUser;
  }


  render() {
    return (
      <div style={{backgroundColor:this.props.css}} className="signup3-body">
        <HeaderContainer />
        <div className="signup3-main-title">Ahh, the last step. Don’t stop now!</div>
        <form onSubmit={this.handleSubmit} className="signup3-form">
          <div className="signup3-inputs">
            <label>Email</label>
            <input
              type="text"
              placeholder="e.g example@url.com"
              value={this.state.username}
              onChange={this.update('username')}
              />
            {Validation(this.state.usernameError)}
            <br />
            <label>Password</label>
            <input
              type="password"
              placeholder="6 characters minimum."
              value={this.state.password}
              onChange={this.update('password')}
              className="signup3-password-input"
              />
            {Validation(this.state.passwordError)}
          </div>
          <input type="submit" value="Done!" />
          <p>By signing up you agree to our <u>Terms of Service</u> & <u>Privacy Policy</u>.</p>
        </form>
      </div>
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

export default withRouter(SignUp3);
