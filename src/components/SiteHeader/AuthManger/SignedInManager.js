import React, { useContext } from 'react';

import AuthContext from '../../../context/AuthContext';

import Firebase from 'firebase/app';
import 'firebase/auth';

const SignedInManager = ({ username }) => {
  const { setUsername } = useContext(AuthContext);

  const handleSignOut = () => {
    Firebase.auth().signOut();
    setUsername(null);
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
