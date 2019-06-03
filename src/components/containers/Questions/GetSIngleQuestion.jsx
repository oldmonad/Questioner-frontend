import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

import { fetchQuestion } from '../../../store/actions/questions';
import { fetchComments } from '../../../store/actions/comments';

import FullPageLoader from '../../presentationals/FullPageLoader/FullPageLoader';
import Comments from '../../presentationals/Comments/Comments';

class GetSIngleQuestion extends Component {
  async componentDidMount() {
    const {
      match: {
        params: { questionId },
      },
      history,
    } = this.props;

    await this.props.fetchQuestion(questionId, history);
    this.props.fetchComments(questionId);
  }
  render() {
    const {
      question: { isLoading, question },
      comments: { comments },
    } = this.props;

    let questionComments;
    if (comments) {
      questionComments = comments.map(comment => (
        <Comments comment={comment} key={comment.id} />
      ));
    }

    return (
      <Fragment>
        {isLoading && <FullPageLoader />}
        <div className="container">
          <div className="row justify-content-center py-3">
            <div className="col-lg-10 text-center">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    Poster's name
                  </h6>
                  <p className="card-text">{question.body}</p>
                  <button
                    type="button"
                    className="btn btn-labeled btn-success mr-2"
                  >
                    <span className="thumb-btn-label">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                    2
                  </button>
                  <button type="button" className="btn btn-labeled btn-danger">
                    <span className="thumb-btn-label">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </span>
                    4
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center py-3">
            <div className="col-lg-8 text-center">
              <div className="text-area">
                <textarea
                  placeholder="Make a comment..."
                  className="form-control text-areax"
                  id="exampleFormControlTextarea4"
                  rows="3"
                />
                <button type="button" className="btn btn-dark mt-2">
                  Post Comment
                </button>
              </div>
              {questionComments}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

GetSIngleQuestion.prototypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  question: state.questions,
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  { fetchQuestion, fetchComments },
)(withRouter(GetSIngleQuestion));
