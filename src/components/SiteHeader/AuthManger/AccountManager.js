import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './AccountManager.scss';

const AccountManager = ({ displayName, logout }) => {
  const dropdownRef = useRef();

  const handleSignOut = () => {
    logout();
  };

  const toggleDropDown = () => {
    dropdownRef.current.classList.toggle('droppeddown');
  };

  return (
    <div className='account_manager'>
      <i className='fas fa-user-circle' />
      <div className='username_label'>{displayName}</div>
      <div className='dropdown_container'>
        <i className='fas fa-sort-down' onClick={toggleDropDown} />
        <div className='signin_dropdown' ref={dropdownRef}>
          <div className='signout_link' onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

AccountManager.propTypes = {
  displayName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AccountManager;
