import React from 'react';
import './SiteHeader.scss';

function SiteHeader({ setLoggingInState }) {
  return (
    <header>
      <h1>Fortnite Timeline</h1>
      <div className='login_link' onClick={() => setLoggingInState(true)}>
        Log In
      </div>
    </header>
  );
}

export default SiteHeader;
