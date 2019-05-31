import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faChevronRight);

import { fetchMeetups } from '../../../store/actions/meetups';

// import Button from '../../presentationals/Button/Button';

// import Loader from '../../presentationals/Loader/Loader';

//Reducer

export class FetchAllMeetups extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }
  render() {
    const { meetups, isLoading } = this.props;
    let meetuplist;
    if (meetups.successResponse.data) {
      meetuplist = meetups.successResponse.data.map(meetup => {
        return (
          <Fragment>
            <div
              className="card text-center mb-3  border-0"
              style={{ maxWidth: '18rem', minWidth: '18rem' }}
            >
              <div>
                <div className="img-card" href="#">
                  <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    Bootstrap 3 Carousel FadeIn Out Effect
                  </h4>
                  <p className="">
                    Tutorial to make a carousel bootstrap by adding more
                    wonderful effect fadein. Tutorial to make a carousel
                    bootstrap by adding more wonderful effect fadein ...
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-labeled btn-outline-dark"
                >
                  <i className="glyphicon glyphicon-chevron-right">View more</i>
                  <span className="btn-label">
                    <FontAwesomeIcon icon={faChevronRight} />
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

{
  /* <Fragment key={key}>
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
        <p className="">{meetup.location}</p>
        <p className="">{meetup.happening_on}</p>
      </div>
    </div>

    <div>
      <button type="button" className="btn btn-labeled btn-outline-dark">
        <i className="glyphicon glyphicon-chevron-right">View more</i>
        <span className="btn-label">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </button>
    </div>
  </div>
</Fragment>; */
}
