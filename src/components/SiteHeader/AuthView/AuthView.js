import React, { useState, useEffect } from 'react';

import LoginView from './LoginView';
import SignUpView from './SignUpView';

import { enableScroll, disableScroll } from '../../../helper/ToggleScroll';

import './AuthView.scss';

const AuthView = ({ onExit }) => {
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
    onExit(false);
  };

  return (
    <div className='auth_container'>
      <div className='auth_window'>
        {isReturningUser ? (
          <LoginView onSuccess={handleClose} />
        ) : (
          <SignUpView onSuccess={handleClose} />
        )}
        <div className='form_toggle'>
          <div onClick={() => toggleForm()}>
            {isReturningUser ? 'New user?' : 'Returning user?'}
          </div>
        </div>
        <div className='close_button' onClick={handleClose}>
          <i className='far fa-times-circle'></i>
        </div>
      </div>
      <div className='modal_background' onClick={handleClose} />
    </div>
  );
};

export default AuthView;
