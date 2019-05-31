import React from 'react';
import FetchAllMeetups from '../../components/containers/Meetups/FetchAllMeetups';

import './AllMeetups.css';
const AllMeetups = () => {
  return (
    <div className="card-deck">
      <FetchAllMeetups />
    </div>
  );
};

export default AllMeetups;
