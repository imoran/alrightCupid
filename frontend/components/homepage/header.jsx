import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="home-page-header">
        {console.log(this.props)}
        <div>Logo</div>
        <div className="home-page-header-account">
          <p>Have an account?</p>
          <button onClick={() => this.props.openModal('login')}>Sign in</button>
        </div>
      </header>
    );
  }
}

export default Header;
