import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import HeaderContainer from './header_container';
import Splash from './splash';
import SignUp1 from '../session_form/signup1_container';
import SignUp2 from '../session_form/signup2_container';
import SignUp3 from '../session_form/signup3_container';



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
    // let color = COLOR[this.state.currentIndex];
    let color = "#24d8f3";
    switch (this.state.step) {
      case 1:
        return (
          <div className={this.state.css}>
            <HeaderContainer />
            <Splash />
            <SignUp1 nextStep={this.nextStep} />
          </div>);
      case 2:
        return <SignUp2
          nextStep={this.nextStep}
          css={color}
           />;
      case 3:
        return <SignUp3 css={color}/>;
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
      <div>
        {this.multiStep()}
        <div>Footer</div>
      </div>
    );
  }
}



const CSS = ['home-page-couch',
'home-page-eyemasks',
'home-page-facepaint',
'home-page-hands',
'home-page-rose'];
const COLOR = ['#24d8f3', '#21bd65', '#23c3fd', '#f0a1c1', '#ffc5e3'];
