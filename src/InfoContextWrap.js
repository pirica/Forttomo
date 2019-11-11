import React, { useState, useEffect } from 'react';

import InfoContext from './context/AccountInfo';

function InfoContextWrap({ children }) {
    const storedVbucks = localStorage.getItem('vbucks');
    const storedDailies = localStorage.getItem('dailies');
    const storedMissions = localStorage.getItem('missions');
    const storedLevel = localStorage.getItem('level');
    const storedExperience = localStorage.getItem('experience');
    const storedLoginDay = localStorage.getItem('loginDay');
    const storedSyncDate = Date.parse(localStorage.getItem('syncDate'));
    const storedPunchCard = JSON.parse(localStorage.getItem('punchCardStates'));
    const defaultPunchCard = [true, true, true, true, true, true, true];

    const [vbucks, setVbucks] = useState(+storedVbucks);
    const [dailies, setDailies] = useState(+storedDailies);
    const [missions, setMissions] = useState(+storedMissions);
    const [level, setLevel] = useState(+storedLevel);
    const [experience, setExperience] = useState(+storedExperience);
    const [loginDay, setLoginDay] = useState(+storedLoginDay);
    const [syncDate, setSyncDate] = useState(
        storedSyncDate ? new Date(storedSyncDate) : new Date()
    );
    const [punchCardStates, setPunchCardStates] = useState(
        storedPunchCard || defaultPunchCard
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
        const syncDateString = syncDate.toISOString().split('T')[0];
        localStorage.setItem('syncDate', syncDateString);
    }, [syncDate]);
    useEffect(() => {
        const punchCardString = JSON.stringify(punchCardStates);
        localStorage.setItem('punchCardStates', punchCardString);
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
                syncDate,
                punchCardStates,
                setVbucks,
                setDailies,
                setMissions,
                setLevel,
                setExperience,
                setLoginDay,
                setSyncDate,
                setPunchCardStates
            }}
        >
            {children}
        </InfoContext.Provider>
    );
}

export default InfoContextWrap;
