import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FetchAllMeetups from '../../components/containers/Meetups/FetchAllMeetups';
import { isAdmin, getToken } from '../../api/helpers';

import { fetchMeetups } from '../../store/actions/meetups';
import FullPageLoader from '../../components/presentationals/FullPageLoader/FullPageLoader';

import './AllMeetups.css';
export class AllMeetups extends Component {
  render() {
    const {
      meetups: { isLoading },
    } = this.props;

    return (
      <Fragment>
        {isLoading && <FullPageLoader />}
        <div className="mt-4">
          {getToken() && isAdmin() && (
            <Link className="btn btn-dark" to="/create-meetup">
              Create Meetup
            </Link>
          )}
          <div className="card-deck">
            <FetchAllMeetups />
          </div>
        </div>
      </Fragment>
    );
  }
}

FetchAllMeetups.prototypes = {
  fetchMeetups: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ meetups: state.meetups });

export default connect(
  mapStateToProps,
  { fetchMeetups },
)(AllMeetups);
