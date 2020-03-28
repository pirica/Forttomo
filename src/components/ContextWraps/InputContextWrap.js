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
  const storedUnfinishedXP = localStorage.getItem('unfinishedXP');
  let storedLoginDay = localStorage.getItem('loginDay');
  const storedSyncDate = Date.parse(localStorage.getItem('syncDate'));
  const storedPunchCard = JSON.parse(localStorage.getItem('punchCardStates'));
  const storedDailyBRStates = JSON.parse(localStorage.getItem('dailyBRStates'));
  const storedDailySTWStates = JSON.parse(
    localStorage.getItem('dailySTWStates')
  );
  const storedDailyAlertsStates = JSON.parse(
    localStorage.getItem('dailyAlertsStates')
  );
  const defaultStates = [true, true, true, true, true, true, true];

  if (storedSyncDate) {
    const msPerDay = 8.64e7;
    const beginDate = new Date(storedSyncDate);
    const endDate = new Date();

    beginDate.setUTCHours(0, 0, 0);
    endDate.setUTCHours(0, 0, 0);
    const days = Math.round((endDate - beginDate) / msPerDay);

    storedLoginDay = +storedLoginDay + days;
  }

  const [vbucks, setVbucks] = useState(+storedVbucks);
  const [dailies, setDailies] = useState(+storedDailies);
  const [alerts, setAlerts] = useState(+storedAlerts);
  const [averageAlerts, setAverageAlerts] = useState(storedAverageAlerts);
  const [level, setLevel] = useState(+storedLevel);
  const [experience, setExperience] = useState(+storedExperience);
  const [extraXP, setExtraXP] = useState(+storedExtraXP);
  const [unfinishedXP, setUnfinishedXP] = useState(+storedUnfinishedXP);
  const [loginDay, setLoginDay] = useState(+storedLoginDay);
  const [punchCardStates, setPunchCardStates] = useState(
    storedPunchCard || defaultStates
  );
  const [dailyBRStates, setDailyBRStates] = useState(
    storedDailyBRStates || defaultStates
  );
  const [dailySTWStates, setDailySTWStates] = useState(
    storedDailySTWStates || defaultStates
  );
  const [dailyAlertsStates, setDailyAlertsStates] = useState(
    storedDailyAlertsStates || defaultStates
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
    localStorage.setItem('unfinishedXP', unfinishedXP);
  }, [unfinishedXP]);
  useEffect(() => {
    const currentTime = new Date();

    localStorage.setItem('loginDay', loginDay);
    localStorage.setItem('syncDate', currentTime);
  }, [loginDay]);
  useEffect(() => {
    const stringified = JSON.stringify(punchCardStates);
    localStorage.setItem('punchCardStates', stringified);
  }, [punchCardStates]);
  useEffect(() => {
    const stringified = JSON.stringify(dailyBRStates);
    localStorage.setItem('dailyBRStates', stringified);
  }, [dailyBRStates]);
  useEffect(() => {
    const stringified = JSON.stringify(dailySTWStates);
    localStorage.setItem('dailySTWStates', stringified);
  }, [dailySTWStates]);
  useEffect(() => {
    const stringified = JSON.stringify(dailyAlertsStates);
    localStorage.setItem('dailyAlertsStates', stringified);
  }, [dailyAlertsStates]);

  return (
    <InputContext.Provider
      value={{
        vbucks,
        setVbucks,
        dailies,
        setDailies,
        alerts,
        setAlerts,
        averageAlerts,
        setAverageAlerts,
        level,
        setLevel,
        experience,
        setExperience,
        extraXP,
        setExtraXP,
        unfinishedXP,
        setUnfinishedXP,
        loginDay,
        setLoginDay,
        dailyBRStates,
        setDailyBRStates,
        punchCardStates,
        setPunchCardStates,
        dailySTWStates,
        setDailySTWStates,
        dailyAlertsStates,
        setDailyAlertsStates
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

export default InputContextWrap;
