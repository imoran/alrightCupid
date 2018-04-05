import React from 'react';


class SignupSplash extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="signup-splash">
        <p>YOU ARE A</p>
        <div className="signup-splash-group">
          <select>
            <option>Straight</option>
            <option>Gay</option>
            <option>Bisexual</option>
            <option>Other</option>
          </select>
          <select>
            <option>Woman</option>
            <option>Man</option>
            <option>Other</option>
          </select>
          <div className="signup-splash-button">Continue</div>
        </div>
      </section>
    );
  }
}


export default SignupSplash;


// <div className="signup-splash-dropdowns">
//   <span>Straight</span>
//   <span></span>
// </div>
// <div className="signup-splash-dropdowns">
//   Woman
// </div>
