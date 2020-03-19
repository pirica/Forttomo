import React from 'react';

export default React.createContext({
  vbucks: null,
  setVbucks: vbucks => {},
  dailies: null,
  setDailies: dailies => {},
  alerts: null,
  setAlerts: setAlerts => {},
  averageAlerts: null,
  setAverageAlerts: averageAlerts => {},
  level: null,
  setLevel: level => {},
  experience: null,
  setExperience: experience => {},
  extraXP: null,
  setExtraXP: extraXP => {},
  unaccountedXP: null,
  setUnaccountedXP: unaccountedXP => {},
  loginDay: null,
  setLoginDay: loginDay => {},
  syncDate: null,
  setSyncDate: syncDate => {},
  punchCardStates: null,
  setPunchCardStates: states => {},
  dailyChallengeState: null,
  setDailyChallengeStates: dailyChallengeState => {}
});
