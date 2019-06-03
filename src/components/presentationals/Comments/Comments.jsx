import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Comments = ({ comment }) => {
  return (
    <div className="card" key={comment.id}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Commenter's name</h6>
        <p className="card-text">{comment.comment}</p>
      </div>
    </div>
    // <div className="card" key={comment.id}>
    //   <div className="card-body">
    //     <h2 className="card-title">{question.title}</h2>
    //     <p className="card-text">{question.body}</p>
    //     <button type="button" className="btn btn-labeled btn-success mr-2">
    //       <span className="thumb-btn-label">
    //         <FontAwesomeIcon icon={faThumbsUp} />
    //       </span>
    //       {question.up_votes}
    //     </button>
    //     <button type="button" className="btn btn-labeled btn-danger">
    //       <span className="thumb-btn-label">
    //         <FontAwesomeIcon icon={faThumbsDown} />
    //       </span>
    //       {question.down_votes}
    //     </button>
    //     <span className="text-right mt-3 comment-btn">
    //       <a
    //         onClick={() => {
    //           const { history } = props;
    //           history.push(`/question=${question.id}`);
    //         }}
    //         className="btn btn-dark question-btn"
    //       >
    //         View Comments
    //       </a>
    //     </span>
    //   </div>
    // </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.object,
};

export default connect(
  null,
  null,
)(withRouter(Comments));
