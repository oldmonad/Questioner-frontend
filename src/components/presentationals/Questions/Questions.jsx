import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(
  faMapMarkerAlt,
  faCalendarAlt,
  faThumbsUp,
  faThumbsDown,
);

const Questions = ({ question, ...props }) => {
  return (
    <div className="card question-card" key={question.id}>
      <div className="card-body">
        <h2 className="card-title">{question.title}</h2>
        <p className="card-text">{question.body}</p>
        <button type="button" className="btn btn-labeled btn-success mr-2">
          <span className="thumb-btn-label">
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          {question.up_votes}
        </button>
        <button type="button" className="btn btn-labeled btn-danger">
          <span className="thumb-btn-label">
            <FontAwesomeIcon icon={faThumbsDown} />
          </span>
          {question.down_votes}
        </button>
        <span className="text-right mt-3 comment-btn">
          <a
            onClick={() => {
              const { history } = props;
              history.push(`/question=${question.id}`);
            }}
            className="btn btn-dark question-btn"
          >
            View Comments
          </a>
        </span>
      </div>
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.object,
};

export default connect(
  null,
  null,
)(withRouter(Questions));
