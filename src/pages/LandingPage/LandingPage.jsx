import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <div className="landing--page">
          <div className="banner">
            <h2>Attend a meetup. Ask questions. All on questioner</h2>
            <h1>
              Questioner is a meetup service used to organize online groups that
              schedule in-person meetup events for people with similar
              interests. You can also ask questions relating to a particular
              meetup.
            </h1>
          </div>
          <div className="button--section">
            <Link
              to="/signup"
              className="landing--button"
              value="Get started"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default LandingPage;
