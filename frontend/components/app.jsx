import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import Dashboard from './dashboard/dashboard';
import HomePageContainer from './homepage/home_page_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
