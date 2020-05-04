import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Utility/Modal';
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
    <Modal handleClose={handleClose}>
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
      </div>
    </Modal>
  );
};

AuthView.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default AuthView;
