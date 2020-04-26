import React, { useContext, useRef } from 'react';

import AuthContext from '../../../context/AuthContext';
import './AccountManager.scss';

const AccountManager = () => {
  const { username, logout } = useContext(AuthContext);
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
      <div className='username_label'>{username}</div>
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

export default AccountManager;
