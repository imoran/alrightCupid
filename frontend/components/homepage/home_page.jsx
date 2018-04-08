import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import HeaderContainer from './header_container';
import Splash from './splash';
import Signup1 from '../session_form/signup1_container';
import Signup2 from '../session_form/signup2_container';
import Signup3 from '../session_form/signup3';



export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: `home-page-couch`,
      currentIndex: 0,
      step: 1
    };

    this.nextStep = this.nextStep.bind(this);
  }

  componentWillMount() {
    this.applyCss();
  }

  applyCss() {
    setInterval(() => {
      let index = (this.state.currentIndex + 1) % (CSS.length);
      this.setState({css: CSS[this.state.currentIndex],
            currentIndex:  index});
    }, 5000);
  }

  multiStep() {
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <Splash />
            <Signup1 nextStep={this.nextStep} />
          </div>);
      case 2:
        return <Signup2 nextStep={this.nextStep} />;
      case 3:
        return <Signup3 />;
      default:
        break;
    }

  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    });
  }

  render() {
    return (
      <div className={this.state.css}>
        <HeaderContainer />
        {this.multiStep()}
      </div>
    );
  }
}



const CSS = ['home-page-couch',
'home-page-eyemasks',
'home-page-facepaint',
'home-page-hands',
'home-page-rose'];
