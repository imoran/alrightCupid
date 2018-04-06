import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpContainer from './session_form/signup_container';
import HomePageContainer from './homepage/home_page_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      // <AuthRoute exact path="/dashboard" />
    </Switch>
  </div>
);

export default App;
