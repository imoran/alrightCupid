import React from 'react';
import list from './signup_data';
import merge from 'lodash/merge';

export default class SignUp2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      firstName: '',
      month: 'Month',
      day: 'Day',
      year: 'Year',
      location: 'United States',
      zipcode: '',
      nameError: [],
      zipError: [],
      birthError: []
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
    let {firstName, zipcode, month, day, year} = this.state;
    let nameError = firstName.length === 0 ? ['Sorry, your name can’t be blank.'] : [];
    let zipError = zipcode.length !== 5 ? ['Location is required.'] : [];
    let birthError = [];
    if (month === 'Month' || day === 'Day' || year === 'Year') {
      birthError = ["Something's missing!"];
    }
    this.setState({nameError, zipError, birthError});
    if (nameError.length === 0 ||
        zipError.length === 0 ||
        birthError.length === 0) {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.errorHandling()) {
      let newUser = this.formatUser();
      this.props.action(newUser);
      this.props.nextStep();
    }
  }

  formatUser() {
    let {firstName, zipcode, location, year} = this.state;
    let {gender, orientation} = this.props.user;
    let currentYear = (new Date()).getFullYear();
    let age = (currentYear - year);
    let user = {firstName, zipcode, location, gender, orientation, age};
    return user;
  }

  render() {
    return (
      <div className="home-page-color">
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
            {Validation(this.state.nameError)}
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
                {Validation(this.state.birthError)}
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
              {Validation(this.state.zipError)}
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
