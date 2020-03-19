import React from 'react';

export default React.createContext({
  vbucks: null,
  setVbucks: vbucks => {},
  dailies: null,
  setDailies: dailies => {},
  alerts: null,
  setAlerts: setAlerts => {},
  level: null,
  setLevel: level => {},
  experience: null,
  setExperience: experience => {},
  loginDay: null,
  setLoginDay: loginDay => {},
  syncDate: null,
  setSyncDate: syncDate => {},
  punchCardStates: null,
  setPunchCardStates: states => {}
});
