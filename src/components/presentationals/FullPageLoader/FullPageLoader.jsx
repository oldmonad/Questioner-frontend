import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './FullPageLoader.css';
class FullPageLoader extends Component {
  render() {
    return (
      <div className="full-page-loader">
        <FontAwesomeIcon icon={faSpinner} size="3x" spin />
      </div>
    );
  }
}
export default FullPageLoader;
