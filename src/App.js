import React, { useState, useEffect } from 'react';

import InputView from './components/InputView/InputView';
import WishlistView from './components/WishlistView/WishlistView';
import TimelineView from './components/TimelineView/TimelineView';

import InfoContext from './context/AccountInfo';
import './App.scss';

function App() {
    const [vbucks, setVbucks] = useState(+localStorage.getItem('vbucks'));
    const [dailies, setDailies] = useState(+localStorage.getItem('dailies'));
    const [missions, setMissions] = useState(+localStorage.getItem('missions'));
    const [level, setLevel] = useState(+localStorage.getItem('level'));
    const [experience, setExperience] = useState(
        +localStorage.getItem('experience')
    );
    const [loginDay, setLoginDay] = useState(+localStorage.getItem('loginDay'));
    const [punchCardStates, setPunchCardStates] = useState(
        JSON.parse(localStorage.getItem('punchCardStates')) || [
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ]
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
    useEffect(() => {
        localStorage.setItem(
            'punchCardStates',
            JSON.stringify(punchCardStates)
        );
    }, [punchCardStates]);

    return (
        <InfoContext.Provider
            value={{
                vbucks,
                dailies,
                missions,
                level,
                experience,
                loginDay,
                punchCardStates,
                setVbucks,
                setDailies,
                setMissions,
                setLevel,
                setExperience,
                setLoginDay,
                setPunchCardStates
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
