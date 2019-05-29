import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, type, onClick, value, children }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {value ? value : children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
