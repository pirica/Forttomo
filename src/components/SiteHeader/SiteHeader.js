import React, { useState, useEffect, useContext } from 'react';

import AuthView from './AuthView/AuthView';
import SignedInManager from './AuthManger/SignedInManager';

import AuthContext from '../../context/AuthContext';

import './SiteHeader.scss';
import UnregisteredManager from './AuthManger/UnregisteredManager';

function SiteHeader() {
  const [isAuthWindowOpen, setIsAuthWindowOpen] = useState(false);
  const { username } = useContext(AuthContext);

  useEffect(() => {
    setIsAuthWindowOpen(false);
  }, [username]);

  const isSignedIn = username !== null;

  return (
    <header>
      <h1>Fortnite Timeline</h1>
      <div className='auth_region'>
        {isSignedIn ? (
          <SignedInManager username={username} />
        ) : (
          <UnregisteredManager onClick={setIsAuthWindowOpen} />
        )}
      </div>
      {isAuthWindowOpen ? <AuthView onExit={setIsAuthWindowOpen} /> : <div />}
    </header>
  );
}

export default SiteHeader;
