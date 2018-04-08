import React from 'react';
import HeaderContainer from '../homepage/header_container';
import list from '../dumb';
import merge from 'lodash/merge';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      month: 'Month',
      day: '',
      year: '',
      location: 'United States',
      zipcode: ''
    };
    this.user = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let userAcct = merge({}, this.user, this.state);
    let newUser = this.formatUser(userAcct);
    console.log(newUser);
  }

  formatUser(user) {
    let year = user['year'];
    ['month', 'day', 'year'].forEach(el => delete user[el]);
    let currentYear = (new Date()).getFullYear();
    user = merge(user, { age: currentYear - year});
    return user;
  }


  render() {
    return (
      <div className="home-page-color">
        <HeaderContainer />
        <form onSubmit={this.handleSubmit}>
          <section className="signup-form">
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="First name"
              value={this.state.username}
              onChange={this.update('username')}
              />
            <div className="bday-dropdown">
              <label>Birthdate</label>
              <div className="bday-dropdown-group">
                <br />

                  <select value={this.state.month}
                          onChange={this.update('month')}>
                    {list.months.map(month =>
                      <option key={month} >{month}</option>)}
                  </select>

                  <select value={this.state.day}
                    onChange={this.update('day')}>
                    {list.days[this.state.month].map(
                      day => <option key={day} >{day}</option>)}
                  </select>

                  <select value={this.state.year}
                          onChange={this.update('year')}>
                    {list.year.map(val =>
                      <option key={val} >{val}</option>)}
                  </select>
                </div>
                </div>
                  <label>Location</label>
                  <div className="location">
                  <select value={this.state.location}
                          onChange={this.update('location')}>
                    <option>United States</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zipcode"
                    value={this.state.zipcode}
                    onChange={this.update('zipcode')}
                    />
              </div>
              <input type="submit" value="Next" />
          </section>
        </form>
      </div>
    );
  }
}

export default SignUp;
