import React, { useState } from 'react';

import AuthView from './../AuthView/AuthView';

import './SiteHeader.scss';

function SiteHeader() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <header>
      <h1>Fortnite Timeline</h1>
      <div className='login_link' onClick={() => setIsLoggingIn(true)}>
        Log In
      </div>
      {isLoggingIn && <AuthView setLoggingInState={setIsLoggingIn} />}
    </header>
  );
}

export default SiteHeader;
