import React, { useRef } from 'react';

const AccountDropdown = ({ logout }) => {
  const dropdownRef = useRef();

  const toggleDropDown = () => {
    dropdownRef.current.classList.toggle('droppeddown');
  };

  return (
    <div className='dropdown_container'>
      <i className='fas fa-sort-down' onClick={toggleDropDown} />
      <div className='dropdown' ref={dropdownRef}>
        <div className='link'>Preferences</div>
        <div className='link logout_link' onClick={logout}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
