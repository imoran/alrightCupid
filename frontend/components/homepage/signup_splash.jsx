import React from 'react';
import { withRouter } from 'react-router-dom';
import list from '../dumb';


class SignupSplash extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.user;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.history.push('/signup');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className="signup-splash">
          <p>YOU ARE A</p>
          <div className="signup-splash-group">
            <select value={this.state.orientation}
                    onChange={this.update('orientation')}>
              {list.orientation.map(or => <option key={or}>{or}</option>)}
            </select>
            <select value={this.state.gender}
                    onChange={this.update('gender')}>
              {list.gender.map(gen => <option key={gen}>{gen}</option>)}
            </select>
            <button className="signup-splash-button">Continue</button>
          </div>
        </section>
      </form>
    );
  }
}


export default withRouter(SignupSplash);
