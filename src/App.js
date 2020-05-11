import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SiteHeader from './components/SiteHeader/SiteHeader';
import ControlPanel from './components/ControlPanel';
import DataView from './components/DataView';
import UserAgreement from './components/UserAgreement/UserAgreement';

import './App.scss';
import DataLoader from './components/DataLoader';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <DataLoader>
          <SiteHeader />
          <ControlPanel />
          <DataView />
          <UserAgreement />
        </DataLoader>
      </Provider>
    </div>
  );
}

export default App;
