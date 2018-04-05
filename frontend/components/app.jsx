import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomePageContainer from './homepage/home_page_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
