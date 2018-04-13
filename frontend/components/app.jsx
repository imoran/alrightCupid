import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container';
import HomePageContainer from './homepage/home_page_container';
import Modal from './homepage/signin/modal';
import MatchContainer from './match/match_container';
import UserDetailContainer from './users/user_detail_container';
import CurrentUserDetailContainer from './users/currentuser/currentuser_detail_container';



const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/match" component={MatchContainer} />
      <ProtectedRoute path="/users/:userId" component={UserDetailContainer} />
      <ProtectedRoute exact path="/profile" component={CurrentUserDetailContainer} />
    </Switch>
  </div>
);

export default App;
