import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/authActions';

const AccountDropdown = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef();

  const toggleDropDown = () => {
    dropdownRef.current.classList.toggle('droppeddown');
  };

  return (
    <div className='dropdown_container'>
      <i className='fas fa-sort-down' onClick={toggleDropDown} />
      <div className='dropdown' ref={dropdownRef}>
        <div className='link'>Preferences</div>
        <div className='link logout_link' onClick={() => dispatch(logout())}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
