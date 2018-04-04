import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      Hello, I'm a header!
    </header>
    <SignUpFormContainer />
  </div>
);

export default App;
