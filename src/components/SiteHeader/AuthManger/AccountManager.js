import React from 'react';
import PropTypes from 'prop-types';

import AccountDropdown from './AccountDropdown';

import './AccountManager.scss';

const AccountManager = ({ displayName }) => {
  return (
    <div className='account_manager'>
      <i className='fas fa-user-circle' />
      <div className='username_label'>{displayName}</div>
      <AccountDropdown />
    </div>
  );
};

AccountManager.propTypes = {
  displayName: PropTypes.string.isRequired,
};

export default AccountManager;
