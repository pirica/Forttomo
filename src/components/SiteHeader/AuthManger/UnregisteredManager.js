import React from 'react';

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

export default UnregisteredManager;
