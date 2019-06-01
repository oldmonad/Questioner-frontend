import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ placeholder, className, onChange, value, name }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextArea;
