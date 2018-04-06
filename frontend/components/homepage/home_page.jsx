import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import HeaderContainer from './header_container';
import Splash from './splash';
import SignupSplashContainer from './signup_splash_container';
import random from 'lodash/random';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      css: `home-page-couch`,
      // css: `${CSS[4]}`,
      currentIndex: 0
    };
    this.applyCss = this.applyCss.bind(this)();
  }

  applyCss() {
    setInterval(() => {
      let index = (this.state.currentIndex + 1) % (CSS.length);
      console.log(index);
      this.setState({css: CSS[this.state.currentIndex],
            currentIndex:  index});
    }, 5000);
  }

  render() {
    return (
      <div className={this.state.css}>
        <HeaderContainer />
        <Splash />
        <SignupSplashContainer />
      </div>
    );
  }
}

export default HomePage;




const CSS = ['home-page-couch',
'home-page-eyemasks',
'home-page-facepaint',
'home-page-hands',
'home-page-rose'];
