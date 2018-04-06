import React from 'react';
import { withRouter } from 'react-router-dom';


class SignupSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className="signup-splash">
          <p>YOU ARE A</p>
          <div className="signup-splash-group">
            <select>
              <option defaultValue>Straight</option>
              <option>Gay</option>
              <option>Bisexual</option>
              <option>Other</option>
            </select>
            <select>
              <option defaultValue>Woman</option>
              <option>Man</option>
              <option>Other</option>
            </select>
            <button className="signup-splash-button">Continue</button>
          </div>
        </section>
      </form>
    );
  }
}


export default withRouter(SignupSplash);
