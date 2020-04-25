import React, { useContext } from 'react';

import AuthContext from '../../../context/AuthContext';

const SignedInManager = ({ username }) => {
  const { logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };

  return (
    <div>
      <div className='username_label'>{username}</div>
      <div className='signout_link' onClick={handleSignOut}>
        Sign Out
      </div>
    </div>
  );
};

export default SignedInManager;
