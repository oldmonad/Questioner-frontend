import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faChevronRight);

//Reducer
import { fetchMeetups } from '../../../store/actions/meetups';

import '../../../pages/AllMeetups/AllMeetups.css';

export class FetchAllMeetups extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }
  goToMeetup = id => {
    const { history } = this.props;
    history.push(`/meetup=${id}`);
  };
  render() {
    const { meetups, isLoading } = this.props;
    let meetuplist;
    if (meetups.successResponse.data) {
      meetuplist = meetups.successResponse.data.map((meetup, key) => {
        return (
          <Fragment key={meetup.id}>
            <div
              className="card text-center mb-3  border-0"
              style={{ maxWidth: '18rem', minWidth: '18rem' }}
            >
              <div>
                <div className="img-card" href="#">
                  <img src={meetup.image_url} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{meetup.topic}</h4>
                  <p className="meetup-location">{meetup.location}</p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-labeled btn-outline-dark"
                  onClick={() => {
                    this.goToMeetup(meetup.id);
                  }}
                >
                  <i className="glyphicon glyphicon-chevron-right">Attend</i>
                  <span className="right-btn-label">
                    <FontAwesomeIcon
                      className="chevron-icon"
                      icon={faChevronRight}
                    />
                  </span>
                </button>
              </div>
            </div>
          </Fragment>
        );
      });
    }

    return <>{meetuplist}</>;
  }
}

FetchAllMeetups.prototypes = {
  fetchMeetups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ meetups: state.meetups });

export default connect(
  mapStateToProps,
  { fetchMeetups },
)(withRouter(FetchAllMeetups));
