import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import HeaderContainer from './header_container';
import Splash from './splash';
import SignupSplashContainer from './signup_splash_container';



class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-page-color">
        <HeaderContainer />
        <Splash />
        <SignupSplashContainer />
      </div>
    );
  }
}

export default HomePage;
