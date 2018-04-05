import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import HeaderContainer from './header_container';
import Splash from './splash';
import SignupSplash from './signup_splash';



class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-page-color">
        <HeaderContainer />
        <Splash />
        <SignupSplash />
      </div>

    );
  }
}

export default HomePage;
