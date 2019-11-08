import React, { useState, useEffect } from 'react';

import InputView from './components/InputView/InputView';
import WishlistView from './components/WishlistView/WishlistView';
import TimelineView from './components/TimelineView/TimelineView';

import InfoContext from './context/AccountInfo';
import './App.scss';

function App() {
    const [vbucks, setVbucks] = useState(localStorage.getItem('vbucks') | 0);
    const [dailies, setDailies] = useState(localStorage.getItem('dailies') | 0);
    const [missions, setMissions] = useState(
        localStorage.getItem('missions') | 0
    );
    const [level, setLevel] = useState(localStorage.getItem('level') | 0);
    const [experience, setExperience] = useState(
        localStorage.getItem('experience') | 0
    );
    const [loginDay, setLoginDay] = useState(
        localStorage.getItem('loginDay') | 0
    );

    useEffect(() => {
        localStorage.setItem('vbucks', vbucks);
    }, [vbucks]);
    useEffect(() => {
        localStorage.setItem('dailies', dailies);
    }, [dailies]);
    useEffect(() => {
        localStorage.setItem('missions', missions);
    }, [missions]);
    useEffect(() => {
        localStorage.setItem('level', level);
    }, [level]);
    useEffect(() => {
        localStorage.setItem('experience', experience);
    }, [experience]);
    useEffect(() => {
        localStorage.setItem('loginDay', loginDay);
    }, [loginDay]);

    return (
        <InfoContext.Provider
            value={{
                vbucks,
                dailies,
                missions,
                level,
                experience,
                loginDay,
                setVbucks,
                setDailies,
                setMissions,
                setLevel,
                setExperience,
                setLoginDay
            }}
        >
            <div className='App'>
                <InputView />
                <WishlistView />
                <TimelineView />
            </div>
        </InfoContext.Provider>
    );
}

export default App;
