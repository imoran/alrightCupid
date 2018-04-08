import React from 'react';
import HeaderContainer from '../homepage/header_container';
import list from '../signup_data';
import merge from 'lodash/merge';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      month: 'Month',
      day: 'Day',
      year: 'Year',
      location: 'United States',
      zipcode: ''
    };

    this.user = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorHandling = this.errorHandling.bind(this);
    this.resetValidation = this.resetValidation.bind(this)();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  resetValidation() {
    this.errors = {
      name: [],
      zip: [],
      birth: []
    };
  }

  errorHandling() {
    let {firstName, zipcode, month, day, year} = this.state;
    let {name, zip, birth} = this.errors;
    this.errors.name = firstName.length === 0 ? ['Sorry, your name can’t be blank.'] : [];
    this.errors.zip = zipcode.length !== 5 ? ['Location is required.'] : [];
    if (month === 'Month' || day === 'Day' || year === 'Year') {
      this.errors.birth = ["Something's missing!"];
    } else {
      this.errors.birth = [];
    }
    this.forceUpdate();
    this.resetValidation();
    return name || zip || birth;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.errorHandling()) {
      // let userAcct = merge({}, this.user, this.state);
      // let newUser = this.formatUser(userAcct);
      // console.log("userAcct => ", userAcct);
    }
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
              value={this.state.firstName}
              onChange={this.update('firstName')}
              />
            {Validation(this.errors.name)}
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
                {Validation(this.errors.birth)}
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
              {Validation(this.errors.zip)}
              <input type="submit" value="Next" />
          </section>
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



export default SignUp;
