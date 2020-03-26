import React from 'react';

import InputView from './components/InputView/InputView';
import WishlistView from './components/WishlistView/WishlistView';
import OverviewView from './components/OverviewView/OverviewView';
import TimelineView from './components/TimelineView/TimelineView';

import ContextWrap from './components/ContextWraps/ContextWrap';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ContextWrap>
        <div className='control_panel section'>
          <InputView />
          <WishlistView />
        </div>
        <div className='right_panel section'>
          <OverviewView />
          <TimelineView />
        </div>
      </ContextWrap>
    </div>
  );
}

export default App;
