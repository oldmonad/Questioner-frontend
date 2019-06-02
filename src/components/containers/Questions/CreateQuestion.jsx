import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createQuestion, getQuestion } from '../../../store/actions/questions';

import Loader from '../../presentationals/Loader/Loader';

class CreateQuestion extends Component {
  state = {
    questionData: {
      meetupId: '',
      body: '',
    },
  };

  componentDidMount() {
    const {
      match: {
        params: { meetupId },
      },
      history,
    } = this.props;

    this.setState({
      questionData: {
        ...this.state.questionData,
        meetupId: parseInt(meetupId),
      },
    });
  }

  onChange = event => {
    this.setState({
      questionData: {
        ...this.state.questionData,
        [event.target.name]: event.target.value,
      },
    });
  };

  formSubmitHandler = async event => {
    event.preventDefault();
    const { questionData } = this.state;
    if (questionData.body === '' || questionData.meetupId === '') {
      return false;
    }

    this.props.createQuestion(questionData);
  };
  render() {
    const {
      meetups: { isLoading },
    } = this.props;
    return (
      <Fragment>
        <textarea
          placeholder="Ask a question..."
          className="form-control text-areax"
          id="exampleFormControlTextarea4"
          rows="3"
          value={this.state.questionData.body}
          onChange={this.onChange}
          name="body"
        />
        <button
          onClick={this.formSubmitHandler}
          type="button"
          className="btn btn-dark mt-2 text-right"
        >
          {isLoading ? <Loader /> : 'Post Question'}
        </button>
      </Fragment>
    );
  }
}

CreateQuestion.prototypes = {
  createQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meetups: state.meetups,
});

export default connect(
  mapStateToProps,
  { createQuestion },
)(withRouter(CreateQuestion));
