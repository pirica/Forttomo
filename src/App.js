import React from 'react';
import './App.scss';
import InputView from './Components/InputView/InputView';
import WishlistView from './Components/WishlistView/WishlistView';
import TimelineView from './Components/TimelineView/TimelineView';

function App() {
    return (
        <div className='App'>
            <InputView />
            <WishlistView />
            <TimelineView />
        </div>
    );
}

export default App;
