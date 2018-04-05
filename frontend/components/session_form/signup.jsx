import React from 'react';

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
      <div>
        <form>
          <label>First Name</label>
          <input
            type="text"
            placeholder="First name"
          />
          <br />
          <label>Birthdate</label>
          <input
            type="date"
          />
          <br />
          <label>Location</label>
          <input
            type="text"
            placeholder="Zipcode"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
