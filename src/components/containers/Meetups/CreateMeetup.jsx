import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { createMeetup } from '../../../store/actions/meetups';

import Button from '../../presentationals/Button/Button';
import Input from '../../presentationals/Input/Input';

// import Loader from '../../presentationals/Loader/Loader';

//Reducer

export class CreateMeetup extends Component {
  state = {
    meetupData: {
      topic: '',
      location: '',
      time: '',
    },
  };

  onChange = event => {
    this.setState({
      meetupData: {
        ...this.state.meetupData,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = () => {
    const {
      history,
      // location: { state },
    } = this.props;
    this.props.createMeetup(history, this.state.meetupData);
  };
  render() {
    return (
      <div className="container">
        <h1>Create a meetup</h1>
        <Input
          type="text"
          className="form-control form-rounded"
          placeholder="Meetup topic..."
          onChange={this.onChange}
          value={this.state.meetupData.topic}
          name="topic"
        />
        <br />
        <Input
          type="text"
          className="form-control form-rounded"
          placeholder="Meetup address..."
          onChange={this.onChange}
          value={this.state.meetupData.location}
          name="location"
        />
        <br />
        <Input
          type="datetime-local"
          className="form-control form-rounded"
          placeholder="Meetup time"
          onChange={this.onChange}
          value={this.state.meetupData.time}
          name="time"
        />
        <br />
        <Button
          className="submit--button"
          type="submit"
          value="Post Meetup"
          onClick={this.submitHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ meetups: state.meetups });

export default connect(
  mapStateToProps,
  { createMeetup },
)(withRouter(CreateMeetup));
