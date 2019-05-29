import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UpcomingMeetups from './pages/UpcomingMeetups/UpcomingMeetups';
import AllMeetups from './pages/AllMeetups/AllMeetups';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/upcoming-meetups" component={UpcomingMeetups} />
      <Route exact path="/all-meetups" component={AllMeetups} />
    </Switch>
  );
};

export default Routes;
