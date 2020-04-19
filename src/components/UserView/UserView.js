import React, { useState } from 'react';
import './UserView.scss';

import LoginView from './LoginView';
import SignUpView from './SignUpView';

const UserView = ({ setLoggingInState }) => {
  const [loggingIn, setLoggingIn] = useState(true);

  const toggleForm = () => {
    setLoggingIn(!loggingIn);
  };

  const handleClose = () => {
    setLoggingInState(false);
  };

  return (
    <div className='login_container'>
      <div className='login_window'>
        {loggingIn ? (
          <LoginView toggleForm={toggleForm} />
        ) : (
          <SignUpView toggleForm={toggleForm} />
        )}
        <div onClick={handleClose}>Close window</div>
      </div>
      <div className='modal_background' onClick={handleClose} />
    </div>
  );
};

export default UserView;
