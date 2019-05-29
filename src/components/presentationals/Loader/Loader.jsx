import React from 'react';
import PropTypes from 'prop-types';

import './Loader.css';
const Loader = ({ text, size }) => {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
