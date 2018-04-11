import React from 'react';
import list from './signup_data';
import merge from 'lodash/merge';
import HeaderContainer from '../header_container';



export default class SignUp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
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
    let currentYear = (new Date()).getFullYear();
    let {first_name, zipcode, month, day, year} = this.state;
    let nameError = first_name.length === 0 ? ['Sorry, your name can’t be blank.'] : [];
    let zipError = zipcode.length !== 5 ? ['Location is required.'] : [];
    let birthError = [];
    if (month === 'Month' || day === 'Day' || year === 'Year') {
      birthError = ["Something's missing!"];
    } else if ((currentYear - year) < 18 ) {
      birthError = ["You must be at least 18 years old to use AlrightCupid."];
    }
    this.setState({nameError, zipError, birthError});
    if (nameError.length === 0 &&
        zipError.length === 0 &&
        birthError.length === 0) {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.errorHandling()) {
      let newUser = this.formatUser();
      this.props.updateUserInfo(newUser);
      this.props.nextStep();
    }
  }

  formatUser() {
    let {first_name, zipcode, location, year} = this.state;
    let {gender, orientation} = this.props.user;
    let currentYear = (new Date()).getFullYear();
    let age = (currentYear - year);
    let user = {first_name, zipcode, location, gender, orientation, age};
    return user;
  }

  selectMod(List, target, str) {
    return (
      <select value={target}
        className="signup2-form-select"
        onChange={this.update(str)}>
        {List.map(
          l => <option key={l} >{l}</option>)}
        </select>
    );
  }

  render() {
    return (
      <div style={{backgroundColor:this.props.css}} className="signup2-body">
        <HeaderContainer />
        <div className="signup2-main-title">Almost there! Just a little more to go.</div>
        <div className="signup2-main-body">
          <div className="signup2-facebook">
            <div>Sign up faster.</div>
            <div>We never post to Facebook.</div>
            <button>Connect</button>
          </div>
          <div className="signup2-vertical">
            <div className="signup2-vertical-line"></div>
            <div className="signup2-or">OR</div>
            <div className="signup2-vertical-line"></div>
          </div>
          <form onSubmit={this.handleSubmit} className="signup2-form">
            <label>First Name</label>
            <input
              className="signup2-form-firstname"
              type="text"
              placeholder="First name"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              />
            {Validation(this.state.nameError)}
            <label>Birthdate</label>
            <div>
              {this.selectMod(list.months, this.state.month, 'month')}
              {this.selectMod(list.days[this.state.month], this.state.day, 'day')}
              {this.selectMod(list.years, this.state.year, 'year')}
            </div>
            {Validation(this.state.birthError)}
            <label>Location</label>
            <div>
              {this.selectMod(list.countries, this.state.location, 'location')}
              <input
                className="signup2-form-zipcode"
                type="text"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.update('zipcode')}
                />
            </div>
            {Validation(this.state.zipError)}
            <input type="submit" value="Next" className="signup2-form-next"/>
          </form>
        </div>
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
