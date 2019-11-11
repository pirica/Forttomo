import React from 'react';

import InfoContextWrap from './InfoContextWrap';
import InputView from './components/InputView/InputView';
import WishlistView from './components/WishlistView/WishlistView';
import TimelineView from './components/TimelineView/TimelineView';

import './App.scss';

function App() {
    return (
        <InfoContextWrap>
            <div className='App'>
                <InputView />
                <WishlistView />
                <TimelineView />
            </div>
        </InfoContextWrap>
    );
}

export default App;
