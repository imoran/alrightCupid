import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="home-page-header">
        <div>Logo</div>
        <div className="home-page-header-account">
          <p>Have an account?</p>
          <div className="home-page-signin">Sign in</div>
        </div>
      </header>
    );
  }
}

export default Header;
