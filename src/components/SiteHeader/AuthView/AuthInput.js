import React from 'react';
import PropTypes from 'prop-types';

const AuthInput = ({ name, type, value, onChange, isInvalid }) => {
  const validityClass = isInvalid ? 'invalid_input' : '';
  const className = `auth_input ${validityClass}`;

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <>
      <label>{name}</label>
      <input
        className={className}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

AuthInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
};

export default AuthInput;
