import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';

import './FetchSingleMeetup.css';

fontawesome.library.add(
  faMapMarkerAlt,
  faCalendarAlt,
  faThumbsUp,
  faThumbsDown,
);

import FullPageLoader from '../../presentationals/FullPageLoader/FullPageLoader';

//Reducer
import { fetchOneMeetup } from '../../../store/actions/meetups';
import Questions from '../../presentationals/Questions/Questions';

export class FetchSingleMeetup extends Component {
  componentDidMount() {
    const {
      match: {
        params: { meetupId },
      },
      history,
    } = this.props;

    this.props.fetchOneMeetup(meetupId, history);
  }

  render() {
    const meetup = this.props.meetups.successResponse;
    const {
      meetups: { isLoading },
    } = this.props;

    let meetupQuestions;
    if (meetup.questions) {
      meetupQuestions = meetup.questions.map(question => (
        <Questions question={question} key={question.id} />
      ));
    }

    return (
      <Fragment>
        {isLoading && <FullPageLoader />}
        <div className="meetup-container">
          <div className="container ">
            <div className="row justify-content-center py-3">
              <div className="col-md-6 text-center">
                <img
                  src={meetup.image_url}
                  className="w-100 img-thumbnail"
                  alt="Cinque Terre"
                />
              </div>
              <div className="col-md-6 text-left">
                <div className="text-center">
                  <p className="font-weight-bold topic">{meetup.topic}</p>
                </div>
                <div className="mt-4">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-4 icon"
                  />
                  <span className="location">{meetup.location}</span>
                </div>

                <div className="mt-4">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-4 icon" />
                  <span className="location">{meetup.happening_on}</span>
                </div>
              </div>
            </div>
            <div className="questions">
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group purple-border">
                    <textarea
                      placeholder="Ask a question..."
                      className="form-control text-areax"
                      id="exampleFormControlTextarea4"
                      rows="3"
                    />
                    <button
                      type="button"
                      className="btn btn-dark mt-2 text-right"
                    >
                      Post Question
                    </button>
                  </div>
                  {meetupQuestions}
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <img
                      src="https://devfest.gdgla.org/assets/img/devfest.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

FetchSingleMeetup.prototypes = {
  fetchOneMeetup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ meetups: state.meetups });

export default connect(
  mapStateToProps,
  { fetchOneMeetup },
)(withRouter(FetchSingleMeetup));
