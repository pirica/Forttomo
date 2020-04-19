import React, { useState } from 'react';

import ContextProviders from './components/ContextProviders/ContextProviders';

import SiteHeader from './components/SiteHeader/SiteHeader';
import ControlPanel from './components/ControlPanel';
import DataView from './components/DataView';
import UserView from './components/UserView/UserView';
import UserAgreement from './components/UserAgreement/UserAgreement';

import { enableScroll, disableScroll } from './helper/ToggleScroll';

import './App.scss';

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  if (isLoggingIn) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <div className='App'>
      <ContextProviders>
        <SiteHeader setLoggingInState={setIsLoggingIn} />
        <ControlPanel />
        <DataView />
        <UserAgreement />
        {isLoggingIn && <UserView setLoggingInState={setIsLoggingIn} />}
      </ContextProviders>
    </div>
  );
}

export default App;
