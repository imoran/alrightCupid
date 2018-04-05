import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Header from './header';
import Splash from './splash';



class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home-page-color">
        <Header />
        <Splash />
      </div>

    );
  }
}

export default HomePage;
