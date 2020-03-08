import React from 'react';

import InputView from './components/InputView/InputView';
import WishlistView from './components/WishlistView/WishlistView';
import TimelineView from './components/TimelineView/TimelineView';

import ContextWrap from './components/ContextWraps/ContextWrap';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <ContextWrap>
        <div class='control_panel section'>
          <InputView />
          <WishlistView />
        </div>
        <TimelineView />
      </ContextWrap>
    </div>
  );
}

export default App;
