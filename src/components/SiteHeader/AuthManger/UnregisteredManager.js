import React from 'react';
import PropTypes from 'prop-types';

const UnregisteredManager = ({ onClick }) => {
  const handleClick = () => {
    onClick(true);
  };

  return (
    <div className='login_link' onClick={handleClick}>
      Log In
    </div>
  );
};

UnregisteredManager.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UnregisteredManager;
