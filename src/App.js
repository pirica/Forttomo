import React from 'react';

import ContextProviders from './components/ContextProviders/ContextProviders';

import SiteHeader from './components/SiteHeader/SiteHeader';
import ControlPanel from './components/ControlPanel';
import DataView from './components/DataView';
import UserAgreement from './components/UserAgreement/UserAgreement';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <ContextProviders>
        <SiteHeader />
        <ControlPanel />
        <DataView />
        <UserAgreement />
      </ContextProviders>
    </div>
  );
}

export default App;
