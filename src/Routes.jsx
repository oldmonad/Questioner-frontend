import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UpcomingMeetups from './pages/UpcomingMeetups/UpcomingMeetups';
import AllMeetups from './pages/AllMeetups/AllMeetups';
import createMeetup from './components/containers/Meetups/CreateMeetup';
import NotFound from './pages/NotFound/NotFound';
import SingleMeetup from './pages/SingleMeetup/SingleMeetup';
import GetSingleQuestion from './components/containers/Questions/GetSIngleQuestion';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/upcoming-meetups" component={UpcomingMeetups} />
      <Route exact path="/all-meetups" component={AllMeetups} />
      <Route exact path="/meetup=:meetupId" component={SingleMeetup} />
      <Route exact path="/create-meetup" component={createMeetup} />
      <Route exact path="/question=:questionId" component={GetSingleQuestion} />
      <Route exact path="/404" component={NotFound} />
    </Switch>
  );
};

export default Routes;
