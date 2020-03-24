import React, { useState, useEffect } from 'react';

import InputContext from '../../context/InputContext';

function InputContextWrap({ children }) {
  const storedVbucks = localStorage.getItem('vbucks');
  const storedDailies = localStorage.getItem('dailies');
  const storedAlerts = localStorage.getItem('alerts');
  const storedAverageAlerts = localStorage.getItem('averageAlerts');
  const storedLevel = localStorage.getItem('level');
  const storedExperience = localStorage.getItem('experience');
  const storedExtraXP = localStorage.getItem('extraXP');
  const storedUnaccountedXP = localStorage.getItem('unaccountedXP');
  let storedLoginDay = localStorage.getItem('loginDay');
  const storedSyncDate = Date.parse(localStorage.getItem('syncDate'));
  const storedPunchCard = JSON.parse(localStorage.getItem('punchCardStates'));
  const storedDailyChallenges = JSON.parse(
    localStorage.getItem('dailyChallenges')
  );
  const defaultPunchCard = [true, true, true, true, true, true, true];
  const defaultDailyChallenges = [true, true, true, true, true, true, true];

  if (storedSyncDate) {
    const msPerDay = 8.64e7;
    const beginDate = new Date(storedSyncDate);
    const endDate = new Date();

    beginDate.setUTCHours(0, 0, 0);
    endDate.setUTCHours(0, 0, 0);
    const days = Math.round((endDate - beginDate) / msPerDay);

    storedLoginDay = +storedLoginDay + days;
    console.log(storedLoginDay);
  }

  const [vbucks, setVbucks] = useState(+storedVbucks);
  const [dailies, setDailies] = useState(+storedDailies);
  const [alerts, setAlerts] = useState(+storedAlerts);
  const [averageAlerts, setAverageAlerts] = useState(storedAverageAlerts);
  const [level, setLevel] = useState(+storedLevel);
  const [experience, setExperience] = useState(+storedExperience);
  const [extraXP, setExtraXP] = useState(+storedExtraXP);
  const [unaccountedXP, setUnaccountedXP] = useState(+storedUnaccountedXP);
  const [loginDay, setLoginDay] = useState(+storedLoginDay);
  const [punchCardStates, setPunchCardStates] = useState(
    storedPunchCard || defaultPunchCard
  );
  const [dailyChallengeStates, setDailyChallengeStates] = useState(
    storedDailyChallenges || defaultDailyChallenges
  );

  useEffect(() => {
    localStorage.setItem('vbucks', vbucks);
  }, [vbucks]);
  useEffect(() => {
    localStorage.setItem('dailies', dailies);
  }, [dailies]);
  useEffect(() => {
    localStorage.setItem('alerts', alerts);
  }, [alerts]);
  useEffect(() => {
    localStorage.setItem('averageAlerts', averageAlerts);
  }, [averageAlerts]);
  useEffect(() => {
    localStorage.setItem('level', level);
  }, [level]);
  useEffect(() => {
    localStorage.setItem('experience', experience);
  }, [experience]);
  useEffect(() => {
    localStorage.setItem('extraXP', extraXP);
  }, [extraXP]);
  useEffect(() => {
    localStorage.setItem('unaccountedXP', unaccountedXP);
  }, [unaccountedXP]);
  useEffect(() => {
    const currentTime = new Date();

    localStorage.setItem('loginDay', loginDay);
    localStorage.setItem('syncDate', currentTime);
  }, [loginDay]);
  useEffect(() => {
    const punchCardString = JSON.stringify(punchCardStates);
    localStorage.setItem('punchCardStates', punchCardString);
  }, [punchCardStates]);
  useEffect(() => {
    const dailyChallengesString = JSON.stringify(dailyChallengeStates);
    localStorage.setItem('dailyChallenges', dailyChallengesString);
  });

  return (
    <InputContext.Provider
      value={{
        vbucks,
        dailies,
        alerts,
        averageAlerts,
        level,
        experience,
        extraXP,
        unaccountedXP,
        loginDay,
        punchCardStates,
        dailyChallengeStates,
        setVbucks,
        setDailies,
        setAlerts,
        setAverageAlerts,
        setLevel,
        setExperience,
        setExtraXP,
        setUnaccountedXP,
        setLoginDay,
        setPunchCardStates,
        setDailyChallengeStates
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export default InputContextWrap;
