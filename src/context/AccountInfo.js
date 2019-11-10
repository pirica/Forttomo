import React from 'react';

export default React.createContext({
    vbucks: null,
    setVbucks: vbucks => {},
    dailies: null,
    setDailies: dailies => {},
    missions: null,
    setMissions: missions => {},
    level: null,
    setLevel: level => {},
    experience: null,
    setExperience: experience => {},
    loginDay: null,
    setLoginDay: loginDay => {},
    syncDate: null,
    setSyncDate: syncDate => {},
    punchCardStates: [],
    setPunchCardStates: states => {}
});
