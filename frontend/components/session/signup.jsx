import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form onClick={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
            <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
            </label>
            <button>Sign Up!</button>
        </form>
      </div>
    );
  }
}

export default Signup;
