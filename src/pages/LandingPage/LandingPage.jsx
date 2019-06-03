import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container text-sm-center p-t-3">
          <p class="lead ">
            Questioner is a meetup service used to organize online groups that
            schedule in-person meetup events for people with similar interests.
            You can also ask questions relating to a particular meetup, Click
            the button below to view articles you might want to attend
          </p>

          <Link class="btn btn-dark mt-4" to="/all-meetups">
            View meetups
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
