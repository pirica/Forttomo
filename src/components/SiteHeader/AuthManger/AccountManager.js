import React from 'react';
import PropTypes from 'prop-types';

import AccountDropdown from './AccountDropdown';

import './AccountManager.scss';

const AccountManager = ({ displayName, logout }) => {
  return (
    <div className='account_manager'>
      <i className='fas fa-user-circle' />
      <div className='username_label'>{displayName}</div>
      <AccountDropdown logout={logout} />
    </div>
  );
};

AccountManager.propTypes = {
  displayName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AccountManager;
