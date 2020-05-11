import React, { useState, useEffect } from 'react';

import AuthView from './AuthView/AuthView';
import AccountManager from './AuthManger/AccountManager';
import UnregisteredManager from './AuthManger/UnregisteredManager';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/actions';

import './SiteHeader.scss';

const SiteHeader = () => {
  const [isAuthWindowOpen, setIsAuthWindowOpen] = useState(false);
  const { displayName } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // When the user authenticates, the window should close
    setIsAuthWindowOpen(false);
  }, [displayName]);

  const isSignedIn = displayName !== null;

  return (
    <header>
      <h1>FORTTOMO</h1>
      <div className='auth_region'>
        {isSignedIn ? (
          <AccountManager
            displayName={displayName}
            logout={() => dispatch(logout())}
          />
        ) : (
          <UnregisteredManager onClick={setIsAuthWindowOpen} />
        )}
      </div>
      {isAuthWindowOpen ? <AuthView onExit={setIsAuthWindowOpen} /> : <div />}
    </header>
  );
};

export default SiteHeader;
