import React, { useState, useEffect } from 'react';

import LoginView from './LoginView';
import SignUpView from './SignUpView';

import { enableScroll, disableScroll } from '../../helper/ToggleScroll';
import './AuthView.scss';

const AuthView = ({ setLoggingInState }) => {
  const [isReturningUser, setIsReturningUser] = useState(true);

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);

  const toggleForm = () => {
    setIsReturningUser(!isReturningUser);
  };

  const handleClose = () => {
    setLoggingInState(false);
  };

  return (
    <div className='auth_container'>
      <div className='auth_window'>
        {isReturningUser ? (
          <LoginView toggleForm={toggleForm} />
        ) : (
          <SignUpView toggleForm={toggleForm} />
        )}
        <div className='close_button' onClick={handleClose}>
          <i className='far fa-times-circle'></i>
        </div>
      </div>
      <div className='modal_background' onClick={handleClose} />
    </div>
  );
};

export default AuthView;
