import React from 'react';
import HeaderContainer from '../homepage/header_container';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="home-page-color">
        <HeaderContainer />
        <form>
          <section className="signup-form">
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="First name"
              />
            <div className="bday-dropdown">
              <label>Birthdate</label>
              <div className="bday-dropdown-group">
                <br />
                  <select>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                  <select>
                    <option>Day</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                  <select>
                    <option>Year</option>
                    <option>01</option>
                    <option>02</option>
                  </select>
                </div>
                </div>
                  <label>Location</label>
                  <div className="location">
                  <select>
                    <option>United States</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zipcode"
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
