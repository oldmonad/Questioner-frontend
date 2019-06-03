import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import Footer from '../../components/presentationals/Footer/Footer';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-sm-center p-t-3">
            <p class="text-white h3 mx-5">
              Questioner is a meetup service used to organize online groups that
              schedule in-person meetup events for people with similar
              interests. You can also ask questions relating to a particular
              meetup, Click the button below to view articles you might want to
              attend
            </p>

            <Link class="btn btn-dark mt-4" to="/all-meetups">
              View meetups
            </Link>
          </div>
        </div>
        {/* // all */}

        <Footer />
      </Fragment>
    );
  }
}

export default LandingPage;
