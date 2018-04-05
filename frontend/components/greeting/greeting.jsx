import React from 'react';

import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal}) => {

  const sessionLinks = () => (
    <nav>
      <button onClick={() => openModal('login')}>IHLDIH</button>
    </nav>
  );

  const personalGreeting = () => (
    <div>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};


export default Greeting;
